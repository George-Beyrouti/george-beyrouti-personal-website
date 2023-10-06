import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'





const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "George Beyrouti's Personal Portfolio Website",
  description: "George Beyrouti's Personal Portfolio Website Build with Next.js and Tailwind to provide better performance and SEO Support",
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
