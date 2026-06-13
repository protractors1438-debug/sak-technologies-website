import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAK Technologies | Engineering Digital Experiences Beyond Gravity",
  description:
    "SAK Technologies builds high-performance websites, web applications, and digital platforms that help businesses scale faster in the modern world. Premium web development, UI/UX design, and digital solutions.",
  keywords: [
    "web development",
    "digital solutions",
    "UI/UX design",
    "web applications",
    "SAK Technologies",
    "custom website development",
    "e-commerce",
    "SEO optimization",
  ],
  openGraph: {
    title: "SAK Technologies | Engineering Digital Experiences Beyond Gravity",
    description:
      "Premium web development and digital solutions. Building high-performance websites and applications that help businesses scale.",
    type: "website",
    siteName: "SAK Technologies",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg-primary text-text-primary font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
