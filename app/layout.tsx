import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Happy Valentine\'s Day, Mem! ❤️',
  description: 'A romantic Valentine\'s Day message',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  )
}
