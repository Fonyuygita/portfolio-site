import Image from 'next/image'
import DevToBlog from '@/components/DevToBlog'
import Awards from '@/components/Awards'

const CV_URL =
  'https://drive.google.com/file/d/1oI33mhHvQzT3HxVoLNhgDfGMlVlywE81/view?usp=sharing'

const link = 'text-blue-700 hover:underline'

const projects = [
  {
    name: 'Medical AI Assistant',
    href: 'https://github.com/iws3/Medical-AI-Assistant---Production-Ready-Healthcare-Application',
    desc: 'Production-ready healthcare application that assists medical professionals with diagnosis accuracy and patient management.',
  },
  {
    name: 'SEED AI Bootcamp',
    href: 'https://innovatewithseed.com',
    desc: 'Intensive bootcamp training the next generation of AI engineers in Cameroon.',
  },
  {
    name: 'ZIGEX',
    href: 'https://zigexconnect.com',
    desc: 'AI-driven startup building solutions for local challenges.',
  },
]

const talks = [
  'SEED Weekend of Code: training students in hands-on coding sessions.',
  'AI Bootcamp: training the next generation of AI engineers.',
  'DevFest Bamenda: talk on "Attention Is All You Need".',
  'Google I/O 2024: the future of AI in the browser.',
  'Podcast: the impact of LLMs on the lives of engineers.',
  'University talk: students, their future and the AI revolution.',
]

const books = [
  { title: 'Atomic Habits', author: 'James Clear', href: 'https://jamesclear.com/atomic-habits' },
  { title: 'Zero to One', author: 'Peter Thiel', href: 'https://en.wikipedia.org/wiki/Zero_to_One' },
  { title: 'Mastery', author: 'George Leonard', href: 'https://www.goodreads.com/book/show/7205.Mastery' },
  {
    title: 'How Successful People Think',
    author: 'John C. Maxwell',
    href: 'https://www.goodreads.com/book/show/497745.How_Successful_People_Think',
  },
]

const channels = [
  { name: 'Science Time', href: 'https://www.youtube.com/@ScienceTime' },
  { name: 'Lex Fridman', href: 'https://www.youtube.com/@lexfridman' },
  { name: 'Veritasium', href: 'https://www.youtube.com/@veritasium' },
  { name: 'Kurzgesagt', href: 'https://www.youtube.com/@kurzgesagt' },
  { name: '3Blue1Brown', href: 'https://www.youtube.com/@3blue1brown' },
  { name: 'PBS Space Time', href: 'https://www.youtube.com/@pbsspacetime' },
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      {children}
    </section>
  )
}

export default function Home() {
  return (
    <div className="bg-white text-neutral-900 font-serif text-[17px] leading-relaxed">
      <div className="max-w-2xl mx-auto px-5 py-12">
        {/* Header */}
        <header className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold">Fonyuy Gita</h1>
            <p className="mt-3">
              Deep Learning, Linear Algebra, Calculus, Statistics &amp; Probability. Founder.
              I build AI-powered solutions and help train the next generation of African tech leaders.
            </p>
            <p className="mt-3">
              <a href="mailto:fonyuygita@gmail.com" className={link}>Email</a>
              {' / '}
              <a href={CV_URL} target="_blank" rel="noopener noreferrer" className={link}>CV (PDF)</a>
              {' / '}
              <a href="https://github.com/iws3" target="_blank" rel="noopener noreferrer" className={link}>GitHub</a>
              {' / '}
              <a href="https://twitter.com/fonyuygita" target="_blank" rel="noopener noreferrer" className={link}>Twitter</a>
              {' / '}
              <a href="https://linkedin.com/in/fonyuygita" target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
            </p>
          </div>
          <div className="relative w-28 h-28 shrink-0 overflow-hidden rounded-sm">
            <Image
              src="https://i.ibb.co/7xZRkRVH/Chat-GPT-Image-Mar-27-2026-07-50-13-AM.jpg"
              alt="Fonyuy Gita"
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* About */}
        <Section title="About">
          <p>
            I am passionate about Artificial Intelligence and its potential to transform Africa.
            My work is not only building code, but building communities.
          </p>
          <p className="mt-3">
            I co-founded <a href="https://innovatewithseed.com" target="_blank" rel="noopener noreferrer" className={link}>SEED</a>{' '}
            with <a href="https://github.com/yohanes" target="_blank" rel="noopener noreferrer" className={link}>Cheko Yohane</a> (CEO)
            and <a href="https://github.com/Fien-Dora" target="_blank" rel="noopener noreferrer" className={link}>Fien Dora</a> (COO).
            As CTO, I run the SEED AI Bootcamp, where I have trained over 30 students.
          </p>
          <p className="mt-3">
            Some of those students are now building{' '}
            <a href="https://zigexconnect.com" target="_blank" rel="noopener noreferrer" className={link}>ZIGEX</a>,
            a startup we are growing together. I also host SEED AI Friday and speak at tech events
            to advocate for AI adoption.
          </p>
        </Section>

        {/* Awards */}
        <div className="mt-10">
          <Awards />
        </div>

        {/* Projects */}
        <Section title="Projects">
          <ul className="space-y-3">
            {projects.map((p) => (
              <li key={p.name}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className={`${link} font-semibold`}>
                  {p.name}
                </a>
                <br />
                <span className="text-neutral-700">{p.desc}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Talks */}
        <Section title="Talks &amp; Community">
          <ul className="list-disc pl-5 space-y-1">
            {talks.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Section>

        {/* Blog */}
        <div className="mt-10">
          <DevToBlog />
        </div>

        {/* Reading */}
        <Section title="Recommended Reading">
          <ul className="list-disc pl-5 space-y-1">
            {books.map((b) => (
              <li key={b.title}>
                <a href={b.href} target="_blank" rel="noopener noreferrer" className={link}>{b.title}</a>
                , {b.author}
              </li>
            ))}
          </ul>
        </Section>

        {/* Channels */}
        <Section title="Favorite YouTube Channels">
          <p>
            {channels.map((c, i) => (
              <span key={c.name}>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className={link}>{c.name}</a>
                {i < channels.length - 1 && ', '}
              </span>
            ))}
          </p>
        </Section>

        <footer className="mt-14 pt-4 border-t border-neutral-200 text-sm text-neutral-500">
          Fonyuy Gita
        </footer>
      </div>
    </div>
  )
}
