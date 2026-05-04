import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgentReady — See How AI Bots Use Your Website",
  description:
    "Track AI crawlers like ChatGPT and GPTBot visiting your site in real time. Install in 30 seconds.",

  openGraph: {
    title: "AgentReady — Track AI Bot Traffic",
    description:
      "See which AI bots are accessing your website and what pages they hit.",
    url: "https://agentreadyapp.io",
    siteName: "AgentReady",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AgentReady — Track AI Bot Traffic",
    description:
      "See which AI bots are accessing your website in real time.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
