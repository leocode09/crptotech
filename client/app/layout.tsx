import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crpto • Tech',
  description: 'Marketplace For Tech Products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark'>{children}</body>
    </html>
  )
}
