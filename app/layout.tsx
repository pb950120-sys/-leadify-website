import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import './globals.css'

const sora = Sora({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})
const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Leadify | Lead Generation Agency — More Leads, More Sales',
  description:
    'Leadify is a modern lead generation agency helping businesses generate high-quality leads through Facebook Ads, Instagram Ads, WhatsApp Marketing, Landing Pages, and Conversion Funnels.',
  keywords: [
    'lead generation agency',
    'Facebook ads',
    'Instagram ads',
    'WhatsApp marketing',
    'landing page design',
    'funnel optimization',
    'digital marketing agency',
  ],
  openGraph: {
    title: 'Leadify | Lead Generation Agency',
    description:
      'Get more qualified leads for your business with data-driven Facebook & Instagram ads, WhatsApp marketing, and high-converting funnels.',
    type: 'website',
  },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
