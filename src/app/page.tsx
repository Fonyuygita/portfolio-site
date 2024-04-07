import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/Transition'
import Connect from '@/components/connect/Connect'
import Email from '@/components/email/Email'
import Intro from '@/components/intro/Intro'
import Mouse from '@/components/mouse/Mouse'
import { Metadata } from "next";
// import Summary from '@/components/summary/Summary'
import Image from 'next/image'


 
export const metadata: Metadata = {
  title: "Fonyyuy Gita, FullStack developer, Tech Tutor, Web developer | app developer",
  description:
    "fonyuygita.vercel.app - A passionate Full stack developer, Developer, Tutor, FrontEnd, React, Machine Learning, Data Science, and more.",
  keywords: [
    "fonyuygita",
    "fonyuy jude",
    "fomonyuy",
    "gita",
    "full stack developer",
    "fonyuy gita"
  ],
  openGraph: {
    url: "https://fonyuygita.vercel.app",
    type: "website",
    title: "Fonyuy Jude Fomonyuy  | Passionate Full stack developer",
    description:
      "I am a Full Stack Developer . I have worked with various technologies and frameworks, such as React(NextJs), , Node.js, Firebase,React native, Virtual Reality (Web VR) Nodejs/Express.js , PhP, MongoDb, Prisma, Drizzle, Mysql  and React Native. I am passionate about creating user-friendly, scalable, and secure solutions that meet the needs of my clients. I am always eager to learn new skills and explore new challenges.",
    images: [
      {
        url: "https://i.ibb.co/0K8fNSb/studio-4b6afb2daaf60399cc549963c42075fd-9c7yylbj.jpg",
        width: 1200,
        height: 630,
        alt: "gita"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fonyuy gita, Full stack developer, blogger, Tutor | jude fomonyuy",
    description:
      "I am a Full Stack Developer . I have worked with various technologies and frameworks, ",
    creator: "@fonyuygita",
    site: "@fonyuygita",
    images: [
      {
        url: "https://i.ibb.co/0K8fNSb/studio-4b6afb2daaf60399cc549963c42075fd-9c7yylbj.jpg",
        width: 1200,
        height: 630,
        alt: "fonyuygita"
      }
    ]
  },
  alternates: {
    canonical: "https://fonyuygita.vercel.app"
  }
};

export default function Home() {
  return (
    <div className='home !mt-[8rem]'>
<TransitionEffect/>

      <Intro/>
      <Connect/>
      <Mouse/>
    
     
    </div>
  )
}
