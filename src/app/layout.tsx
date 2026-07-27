import type { Metadata } from "next";
import { Barlow_Condensed, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Get ID | Your Ultimate Betting Partner",
  description:
    "Get ID — trusted sports & casino betting platform. Chat on WhatsApp or visit www.getid.live to get started.",
  openGraph: {
    title: "Get ID | Your Ultimate Betting Partner",
    description:
      "Trusted sports & casino betting. Connect on WhatsApp or visit www.getid.live.",
    url: "https://www.getid.live",
    siteName: "Get ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${barlow.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
