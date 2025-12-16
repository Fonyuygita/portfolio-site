"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Trophy, Flame } from 'lucide-react'

export default function Awards() {
  return (
    <section className="space-y-6 animate-in slide-in-from-bottom-4 duration-1000 delay-200">
      <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-2 flex items-center gap-2">
        <Trophy className="h-6 w-6 text-yellow-500" /> Awards & Recognition
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Top 7 Award Card */}
        <div className="relative group overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background to-muted/50 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-yellow-500/30">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Trophy className="h-32 w-32 rotate-12" />
          </div>
          
          <div className="flex items-start gap-4 mb-6 relative z-10">
            <div className="relative w-16 h-16 shrink-0 rounded-full border-2 border-yellow-500/20 shadow-inner bg-background p-1">
              <Image 
                src="/top_7.png" 
                alt="Top 7 Award Badge" 
                fill 
                className="object-contain p-1"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-600 dark:from-yellow-400 dark:to-amber-300">
                Top 7 Must-Reads
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Featured <strong>3x</strong> in Dev.to&apos;s weekly &quot;must-reads&quot;. 
                Recognized for high-impact technical writing. 🙌
              </p>
            </div>
          </div>

          <div className="space-y-3 relative z-10">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Winning Articles</h4>
            <div className="space-y-2">
              <Link href="https://dev.to/fonyuygita/the-day-transformers-stared-back-at-me-2c1p" target="_blank" className="block group/link">
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-background/80 hover:shadow-sm border border-transparent hover:border-border transition-all">
                  <span className="text-sm font-medium group-hover/link:text-blue-600 truncate mr-2">
                    The Day Transformers Stared Back At Me
                  </span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity text-blue-600" />
                </div>
              </Link>
              <Link href="https://dev.to/fonyuygita/chatgpts-evil-twins-are-here-4hd4" target="_blank" className="block group/link">
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-background/80 hover:shadow-sm border border-transparent hover:border-border transition-all">
                  <span className="text-sm font-medium group-hover/link:text-blue-600 truncate mr-2">
                    ChatGPT&apos;s Evil Twins Are Here
                  </span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity text-blue-600" />
                </div>
              </Link>
              <Link href="https://dev.to/fonyuygita/the-complete-guide-to-prompt-engineering-in-2025-master-the-art-of-ai-communication-4n30" target="_blank" className="block group/link">
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-background/80 hover:shadow-sm border border-transparent hover:border-border transition-all">
                  <span className="text-sm font-medium group-hover/link:text-blue-600 truncate mr-2">
                    Complete Guide to Prompt Engineering 2025
                  </span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity text-blue-600" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Python Award Card */}
        <div className="relative group overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background to-muted/50 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-500/30">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Flame className="h-32 w-32 rotate-12" />
          </div>

          <div className="flex items-start gap-4 mb-6 relative z-10">
             <div className="relative w-16 h-16 shrink-0 rounded-full border-2 border-blue-500/20 shadow-inner bg-background p-1">
              <Image 
                src="/python.png" 
                alt="Top Python Author Badge" 
                fill 
                className="object-contain p-1"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-300">
                Top Python Author
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Awarded to the top Python author of the week for exceptional contribution to the community.
              </p>
            </div>
          </div>

          <div className="space-y-3 relative z-10">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Winning Article</h4>
             <Link href="https://dev.to/fonyuygita/building-a-production-ready-medical-ai-assistant-with-python-fastapi-tavili-gemini-langchain-5693" target="_blank" className="block group/link">
                <div className="p-3 rounded-lg bg-background/50 hover:bg-background border border-border/50 hover:border-blue-500/30 transition-all shadow-sm">
                  <span className="text-sm font-medium group-hover/link:text-blue-600 block mb-1 leading-snug">
                     Building a Production-Ready Medical AI Assistant with Python, FastAPI & Gemini
                  </span>
                   <div className="flex items-center text-xs text-muted-foreground mt-2">
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full mr-2">Featured</span>
                      <span>Read Article</span>
                      <ExternalLink className="ml-1 h-3 w-3" />
                   </div>
                </div>
              </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
