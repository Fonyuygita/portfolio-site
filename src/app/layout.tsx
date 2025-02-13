// import Sidebar from '@/components/intro/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


import Navbar from '@/components/Navbar/Navbar'

import Footer from '../components/Footer'
import HireMe from '@/components/HireMe'
import Whatsapp from '@/components/Whatssapp'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import Layout from '@/components/Layout'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fonyuy Jude Fomonyuy',
  description: 'A passionate Full stack developer',
  manifest: '/manifest.json',
  // themeColor: '#000000'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src='/register-sw.ts' />

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>

    </html>
  )
}
