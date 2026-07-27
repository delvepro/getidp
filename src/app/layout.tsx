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
  title: "Get ID | Watch Cricket Live",
  description:
    "Get ID — cricket watching platform for fans. Live matches, scores, highlights. Chat on WhatsApp or visit getid.live.",
  openGraph: {
    title: "Get ID | Watch Cricket Live",
    description:
      "Live cricket streams, scores & fan updates. Connect on WhatsApp or visit getid.live.",
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
