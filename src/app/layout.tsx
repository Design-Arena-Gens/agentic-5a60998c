import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adcraze | Performance-Driven Advertising Agency",
  description:
    "Adcraze helps growth-focused brands eliminate wasted ad spend with performance-based advertising, transparent reporting, and accountable ROI.",
};

const headingFont = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
