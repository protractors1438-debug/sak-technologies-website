import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAK Technologies | Premium Web Development & Digital Engineering Studio",
  description:
    "SAK Technologies builds high-performance websites, web applications, and digital platforms. A premium creative engineering studio designing custom web solutions for modern businesses.",
  keywords: [
    "web development",
    "digital solutions",
    "UI/UX design",
    "web applications",
    "SAK Technologies",
    "custom website development",
    "e-commerce",
    "SEO optimization",
    "creative technology",
  ],
  openGraph: {
    title: "SAK Technologies | Premium Web Development & Digital Engineering Studio",
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
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg-primary text-text-primary font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
