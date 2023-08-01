// import Sidebar from '@/components/intro/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Menu from '@/components/menu/Menu'
import CircularTextAnimation from '@/components/email/Animation'
import Navbar from '@/components/Navbar/Navbar'
import Transition from '@/components/Transition'
import TransitionEffect from '@/components/Transition'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fonyuy Jude Fomonyuy',
  description: 'My portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
   
      <body className={inter.className}>
     
    
      <Navbar/>
        
  
    
      {children}
    <CircularTextAnimation/>
     
        
      </body>
    </html>
  )
}
