import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Fonyuy Gita | AI Enthusiast & Founder',
  description: 'Portfolio of Fonyuy Gita - AI Advocate, Co-founder of SEED & ZIGEX.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans min-h-screen bg-background text-foreground antialiased md:max-w-2xl lg:max-w-3xl mx-auto px-6 py-8 md:py-16 selection:bg-primary/20`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="flex justify-between items-center mb-12 sm:mb-20">
             <div className="font-bold text-lg tracking-tight hover:opacity-80 transition-opacity cursor-default">
               Gita.
             </div>
             <ModeToggle />
          </header>
          <main>
            {children}
          </main>
          <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
             &copy; {new Date().getFullYear()} Fonyuy Gita. Built with Next.js & Tailwind.
          </footer>
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
