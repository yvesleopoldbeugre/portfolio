import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portofolio Yves Beugre',
  description: 'By Yves Beugre | Software Engineer',
  generator: 'yvesbeugre.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Mon portfolio 🚀" />
        <meta property="og:description" content="Découvrez mon portfolio incroyable construite avec React." />
        <meta property="og:image" content="https://portfolio.yvesbeugre.dev/preview.png" />
        <meta property="og:url" content="https://portfolio.yvesbeugre.dev" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mon portfolio 🚀" />
        <meta name="twitter:description" content="Découvrez mon portfolio incroyable construite avec React." />
        <meta name="twitter:image" content="https://portfolio.yvesbeugre/preview.png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
