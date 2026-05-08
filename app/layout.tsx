import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AgentReady — See Which AI Bots Are Reading Your Website',

  description:
    'Monitor ChatGPT, Claude, GPTBot, and AI crawlers accessing your pricing, demo, contact, and high-value pages.',

  openGraph: {
    title: 'AI Bots Are Visiting Your Website',

    description:
      'See which AI systems access your pricing pages, demos, lead funnels, and high-value content before it impacts your business.',

    url: 'https://agentreadyapp.io',

    siteName: 'AgentReady',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AgentReady AI Traffic Dashboard',
      },
    ],

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'AI Bots Are Visiting Your Website',

    description:
      'Track ChatGPT, Claude, GPTBot, and AI crawler activity hitting your website in real time.',

    images: ['/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  )
}