// import Sidebar from '@/components/intro/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


import Navbar from '@/components/Navbar/Navbar'

import Footer from '../components/Footer'
import HireMe from '@/components/HireMe'
import Whatsapp from '@/components/Whatssapp'



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
    <HireMe/>
     
    <Footer/>
    <Whatsapp/>
      </body>
     
    </html>
  )
}
