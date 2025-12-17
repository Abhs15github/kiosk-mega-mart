import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "KIOSK Mega Mart - Fresh Groceries & Everyday Essentials | Sector 57, Gurugram",
  description: "Your trusted neighbourhood kiosk for fresh groceries, dairy, bakery, snacks, personal care, and household essentials in Sector 57, Gurugram. Order on WhatsApp for quick delivery.",
  keywords: "grocery store Gurugram, fresh fruits vegetables Sector 57, departmental store near me, kiosk mega mart, daily essentials Gurugram, grocery delivery WhatsApp",
  authors: [{ name: "KIOSK Mega Mart" }],
  openGraph: {
    title: "KIOSK Mega Mart - Fresh Groceries & Everyday Essentials",
    description: "Your trusted neighbourhood kiosk for everyday essentials in Sector 57, Gurugram. Order on WhatsApp now!",
    type: "website",
    locale: "en_IN",
    siteName: "KIOSK Mega Mart",
  },
  twitter: {
    card: "summary_large_image",
    title: "KIOSK Mega Mart - Fresh Groceries & Everyday Essentials",
    description: "Your trusted neighbourhood kiosk for everyday essentials in Sector 57, Gurugram.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
