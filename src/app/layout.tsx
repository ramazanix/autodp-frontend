import './globals.css'
import type { Metadata } from 'next'
import { Providers } from '@/providers'

export const metadata: Metadata = {
  title: 'AutoDP',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full flex-col bg-gradient-to-b from-blue-300 to-red-500/60">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
