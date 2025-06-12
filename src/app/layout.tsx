import { Geist, Geist_Mono } from 'next/font/google'
import { ReactNode } from 'react'
import Header from './components/Header/Header'
import type { Metadata } from 'next'

import './globals.scss'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Приложение для заказа в ресторане "Чайхана"',
  description: 'Developer Roman N.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
