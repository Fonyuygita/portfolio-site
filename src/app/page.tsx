import Image from 'next/image'
import Link from 'next/link'
import DevToBlog from '@/components/DevToBlog'
import Awards from '@/components/Awards'
import { Mail, Github, Twitter, Linkedin, ExternalLink, Youtube, BookOpen, Quote } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-20 animate-in fade-in duration-700 pb-10">
      
      {/* Mission Statement */}
      <section className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-background p-8 mb-8 shadow-sm">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <Quote className="h-40 w-40 rotate-12" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400">
             <Quote className="h-5 w-5" />
             <span className="text-sm font-semibold uppercase tracking-wider">My Mission</span>
          </div>
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground">
            To cultivate the <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">&quot;I want to build my own&quot;</span> mentality in young minds.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
             Seeing that spark grow drives me to live and make those dreams a reality.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row gap-8 items-start md:items-center">
        <div className="flex-1 space-y-5">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Hi, I&apos;m Fonyuy Gita.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AI Enthusiast, Engineer, and Founder. I build AI-powered solutions and empower the next generation of African tech leaders. 
            Co-founder of <span className="font-semibold text-foreground">SEED</span> and <span className="font-semibold text-foreground">ZIGEX</span>.
          </p>
          <div className="flex gap-5 pt-2">
            <Link href="mailto:fonyuygita@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110 duration-200">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="https://github.com/fonyuygita" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110 duration-200">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://twitter.com/fonyuygita" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110 duration-200">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
             <Link href="https://linkedin.com/in/fonyuygita" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110 duration-200">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="w-28 h-28 md:w-40 md:h-40 relative rounded-full overflow-hidden border-2 border-muted shrink-0 shadow-xl">
          <Image
            src="/fonyuygita.png"
            alt="Fonyuy Gita"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-2">About</h2>
        <div className="prose dark:prose-invert text-muted-foreground leading-relaxed max-w-none text-lg">
          <p>
            I am deeply passionate about Artificial Intelligence and its potential to transform Africa. 
            My journey involves not just building code, but building communities.
          </p>
          <p>
            I co-founded <Link href="https://innovatewithseed.com" target="_blank" className="font-semibold">SEED</Link> alongside <Link href="https://github.com/yohanes" target="_blank">Cheko Yohane</Link> (CEO) and <Link href="https://github.com/Fien-Dora" target="_blank">Fien Dora</Link> (COO). 
            Serving as the <span className="font-semibold text-foreground">CTO</span>, I host the <span className="font-semibold text-foreground">SEED AI BOOTCAMP</span>, where I&apos;ve trained over 30 students.
          </p>
          <p>
            Some of my students are now building <Link href="https://zigexconnect.com" target="_blank" className="font-semibold">ZIGEX</Link>, 
            a startup we are growing together. I also host <strong>SEED AI FRIDAY</strong> and speak at various tech events to advocate for AI adoption.
          </p>
        </div>
      </section>

      {/* Awards Section */}
      <Awards />

      {/* Projects Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-2">Selected Projects</h2>
        <div className="grid grid-cols-1 gap-6">
          
          <Link href="https://github.com/iws3/Medical-AI-Assistant---Production-Ready-Healthcare-Application" target="_blank" className="group block">
            <div className="border border-border p-5 rounded-xl hover:bg-muted/40 transition-all hover:border-primary/50 shadow-sm hover:shadow-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors flex items-center gap-2">
                  Medical AI Assistant <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <span className="text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-1 rounded-full font-medium">✨ Pinned</span>
              </div>
              <p className="text-muted-foreground mb-4">
                A production-ready healthcare application powered by AI. Designed to assist medical professionals with diagnosis accuracy and patient management efficiency.
              </p>
              <div className="flex gap-3 text-xs text-muted-foreground font-mono">
                 <span>Python</span>
                 <span>•</span>
                 <span>AI/ML</span>
                 <span>•</span>
                 <span>Healthcare</span>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <Link href="https://innovatewithseed.com" target="_blank" className="group border border-border p-5 rounded-xl hover:bg-muted/40 transition-all hover:border-foreground/20">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold group-hover:underline">SEED AI BOOTCAMP</h3>
                <span className="text-xs border border-border px-2 py-0.5 rounded-full text-muted-foreground">Education</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Intensive bootcamp training the next generation of AI engineers in Cameroon.
              </p>
             </Link>

             <Link href="https://zigexconnect.com" target="_blank" className="group border border-border p-5 rounded-xl hover:bg-muted/40 transition-all hover:border-foreground/20">
               <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold group-hover:underline">ZIGEX</h3>
                <span className="text-xs border border-border px-2 py-0.5 rounded-full text-muted-foreground">Startup</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-driven startup building solutions for local challenges.
              </p>
             </Link>
          </div>

        </div>
      </section>

      {/* Books Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-2 flex items-center gap-2">
          <BookOpen className="h-5 w-5" /> Recommended Reading
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             { title: "Atomic Habits", author: "James Clear", link: "https://jamesclear.com/atomic-habits" },
             { title: "Zero to One", author: "Peter Thiel", link: "https://en.wikipedia.org/wiki/Zero_to_One" },
             { title: "Mastery", author: "George Leonard", link: "https://www.goodreads.com/book/show/7205.Mastery" },
             { title: "How Successful People Think", author: "John C. Maxwell", link: "https://www.goodreads.com/book/show/497745.How_Successful_People_Think" }
           ].map((book) => (
             <Link key={book.title} href={book.link} target="_blank" className="bg-card border border-border p-4 rounded-lg flex flex-col justify-center text-center hover:border-foreground/30 transition-colors h-32 group">
                <h3 className="font-semibold text-sm mb-1 group-hover:underline">{book.title}</h3>
                <p className="text-xs text-muted-foreground">{book.author}</p>
             </Link>
           ))}
        </div>
      </section>

      {/* YouTube Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-2 flex items-center gap-2">
          <Youtube className="h-5 w-5" /> Favorite Channels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="https://www.youtube.com/@ScienceTime" target="_blank" className="flex items-center gap-4 border border-border p-4 rounded-lg hover:bg-muted/40 transition-colors group">
            <div className="bg-red-600 p-2 rounded-full text-white">
              <Youtube className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold group-hover:underline">Science Time</h3>
              <p className="text-sm text-muted-foreground">Science & Futurism</p>
            </div>
          </Link>
          <Link href="https://www.youtube.com/@lexfridman" target="_blank" className="flex items-center gap-4 border border-border p-4 rounded-lg hover:bg-muted/40 transition-colors group">
             <div className="bg-foreground p-2 rounded-full text-background">
              <Youtube className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold group-hover:underline">Lex Fridman</h3>
              <p className="text-sm text-muted-foreground">Deep Conversations</p>
            </div>
          </Link>
          <Link href="https://www.youtube.com/@veritasium" target="_blank" className="flex items-center gap-4 border border-border p-4 rounded-lg hover:bg-muted/40 transition-colors group">
            <div className="bg-red-600 p-2 rounded-full text-white">
              <Youtube className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold group-hover:underline">Veritasium</h3>
              <p className="text-sm text-muted-foreground">Science & Engineering</p>
            </div>
          </Link>
          <Link href="https://www.youtube.com/@kurzgesagt" target="_blank" className="flex items-center gap-4 border border-border p-4 rounded-lg hover:bg-muted/40 transition-colors group">
            <div className="bg-red-600 p-2 rounded-full text-white">
              <Youtube className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold group-hover:underline">Kurzgesagt</h3>
              <p className="text-sm text-muted-foreground">In a Nutshell</p>
            </div>
          </Link>
          <Link href="https://www.youtube.com/@3blue1brown" target="_blank" className="flex items-center gap-4 border border-border p-4 rounded-lg hover:bg-muted/40 transition-colors group">
            <div className="bg-red-600 p-2 rounded-full text-white">
              <Youtube className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold group-hover:underline">3Blue1Brown</h3>
              <p className="text-sm text-muted-foreground">Math & Visuals</p>
            </div>
          </Link>
          <Link href="https://www.youtube.com/@pbsspacetime" target="_blank" className="flex items-center gap-4 border border-border p-4 rounded-lg hover:bg-muted/40 transition-colors group">
            <div className="bg-red-600 p-2 rounded-full text-white">
              <Youtube className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold group-hover:underline">PBS Space Time</h3>
              <p className="text-sm text-muted-foreground">Astrophysics</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Gallery / Talks Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-2">Talks & Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="space-y-2 group">
             <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-muted">
               <Image src="/woc.png" alt="SEED Weekend of Code" fill className="object-cover transition-transform group-hover:scale-105" />
             </div>
             <p className="text-sm text-muted-foreground italic">
               <strong>SEED Weekend of Code</strong>: Training students in hands-on coding sessions.
             </p>
          </div>

          <div className="space-y-2 group">
             <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-muted">
               <Image src="/bc.png" alt="AI Bootcamp Session" fill className="object-cover transition-transform group-hover:scale-105" />
             </div>
             <p className="text-sm text-muted-foreground italic">
               <strong>AI Bootcamp</strong>: Training the next generation of AI engineers.
             </p>
          </div>

          <div className="space-y-2 group">
             <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-muted">
               <Image src="/devfest.png" alt="DevFest Bamenda Talk" fill className="object-cover transition-transform group-hover:scale-105" />
             </div>
             <p className="text-sm text-muted-foreground italic">
               Speaking at <strong>DevFest Bamenda</strong> on the powerful paper &quot;Attention is All You Need&quot;.
             </p>
          </div>

          <div className="space-y-2 group">
             <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-muted">
               <Image src="/google_io.png" alt="Google IO 2024 Talk" fill className="object-cover transition-transform group-hover:scale-105" />
             </div>
             <p className="text-sm text-muted-foreground italic">
               <strong>Google I/O 2024</strong>: Discussing the future of AI in the browser.
             </p>
          </div>

          <div className="space-y-2 group">
             <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-muted">
               <Image src="/podcast.png" alt="Podcast Session" fill className="object-cover transition-transform group-hover:scale-105" />
             </div>
             <p className="text-sm text-muted-foreground italic">
               Discussing the potential impact of LLMs in the lives of engineers.
             </p>
          </div>

          <div className="space-y-2 group">
             <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-muted">
               <Image src="/ai_talks.png" alt="University Talk" fill className="object-cover transition-transform group-hover:scale-105" />
             </div>
             <p className="text-sm text-muted-foreground italic">
               Talking to university students about their future and the AI revolution.
             </p>
          </div>

        </div>
      </section>

      {/* Blog Section */}
      <section>
        <DevToBlog />
      </section>

    </div>
  )
}
