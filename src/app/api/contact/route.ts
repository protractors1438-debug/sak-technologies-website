import { NextResponse } from 'next/server';

// Basic in-memory rate limiting (Note: In production with multiple instances, use Redis or similar)
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const MAX_REQUESTS = 3;
const WINDOW_MS = 60 * 1000; // 1 minute

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate Limiting Logic
    const now = Date.now();
    const userRate = rateLimit.get(ip);
    if (userRate && now - userRate.timestamp < WINDOW_MS) {
      if (userRate.count >= MAX_REQUESTS) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
      }
      userRate.count++;
    } else {
      rateLimit.set(ip, { count: 1, timestamp: now });
    }

    const data = await request.json();

    // Honeypot check
    if (data.honeyPotField && data.honeyPotField.length > 0) {
      // Spam detected, simulate success to fool the bot
      return NextResponse.json({ success: true, message: 'Message sent successfully (caught by honeypot)' });
    }

    // Validation
    const { name, phone, email, company, service, budget, message } = data;
    
    if (!name || !phone || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Forward to Google Apps Script Webhook
    // If the user hasn't configured the webhook URL yet, we'll log it and return success for local testing
    const googleAppScriptUrl = process.env.GOOGLE_SCRIPT_WEBHOOK_URL;
    
    if (googleAppScriptUrl) {
      // Create a URLSearchParams or JSON depending on what Apps script expects.
      // Easiest is to send POST with application/json, and read e.postData.contents in Apps Script
      const response = await fetch(googleAppScriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          company: company || '',
          service,
          budget: budget || '',
          message
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save to Google Sheets');
      }

      try {
        const resData = await response.json();
        if (resData && resData.result !== 'success') {
          throw new Error(resData.error || 'Failed to save to Google Sheets');
        }
      } catch (jsonErr) {
        console.warn('Failed to parse Google Sheets response as JSON, proceeding since status is OK:', jsonErr);
      }
    } else {
      console.log('GOOGLE_SCRIPT_WEBHOOK_URL is not set. Data received:', { name, phone, email, company, service, budget, message });
      // We simulate a 1-second delay to mimic external API call
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again later.' },
      { status: 500 }
    );
  }
}
