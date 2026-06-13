// Google Apps Script Web App for SAK Technologies Lead Generation
// 
// INSTRUCTIONS FOR DEPLOYMENT:
// 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/13Mk-RACgI_5tVtbQ580JPadRvDPDm64RCcd_trVH9LY/edit
// 2. In the menu, click on Extensions > Apps Script.
// 3. Delete any default code in the editor (e.g., myFunction) and paste this entire code.
// 4. Save the project (click the disk icon or press Ctrl+S).
// 5. In the top-right, click Deploy > New deployment.
// 6. Click the gear icon next to "Select type" and choose "Web app".
// 7. Configure the settings exactly as follows:
//    - Description: SAK Tech Webhook
//    - Execute as: Me (your-email@gmail.com)
//    - Who has access: Anyone (this is secure as it only accepts POST data and appends to this sheet)
// 8. Click Deploy.
// 9. Grant necessary permissions (Google will ask you to authorize the script; click "Advanced" and then "Go to ... (unsafe)" to authorize).
// 10. Copy the "Web app URL" (it will end in "/exec").
// 11. Create a file named .env.local in the root of this project and add:
//     GOOGLE_SCRIPT_WEBHOOK_URL="PASTE_YOUR_WEB_APP_URL_HERE"
// 12. Restart your Next.js dev server.

const SHEET_NAME = 'Sheet1'; // Make sure your sheet tab is named 'Sheet1' (or change this to match your sheet name)

function doPost(e) {
  try {
    // Parse the incoming JSON payload from Next.js
    const payload = JSON.parse(e.postData.contents);
    
    // Connect to the active spreadsheet and select the correct sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // Create timestamp
    const timestamp = new Date();
    
    // Extract data with fallbacks
    const name = payload.name || '';
    const phone = payload.phone || '';
    const email = payload.email || '';
    const company = payload.company || '';
    const service = payload.service || '';
    const budget = payload.budget || '';
    const message = payload.message || '';
    
    // Append the row to the sheet
    sheet.appendRow([
      timestamp,
      name,
      phone,
      email,
      company,
      service,
      budget,
      message
    ]);
    
    // Return success response to the Next.js API
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Handle GET requests to verify the endpoint is active
function doGet(e) {
  return ContentService.createTextOutput("SAK Technologies Lead Generation Webhook is active.");
}
