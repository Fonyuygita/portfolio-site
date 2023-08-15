"use client"
import {motion} from "framer-motion"
import Image from 'next/image'
import React from 'react'
import Text from './Text'
import image from "../../../public/me.png"
import whatsapp from "../../../public/4.png"
import github from "../../../public/5.png"



import   "./intro.css"
import Link from 'next/link'
import AnimateText from '../AnimateText'

const Intro = () => {
  return (
    <div className='container'>
      <div className="left">
<div className="imgContainer">
    <Image src="/fonyuy.png" width={300} height={270}  alt='intro' className='img'/>
</div>
      </div>
      <motion.div className="right w-full"  initial={{y:10}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
        
        <AnimateText text={`I'm Fonyuy Jude.I Turn Vision Into Reality With Code And Design`} className='!text-6xl !text-left sm:!text-2xl'/>

<p>I am a Full Stack Developer . I have worked with various technologies and frameworks, such as React(NextJs), , Node.js, Firebase, and Flutter. I am passionate about creating user-friendly, scalable, and secure solutions that meet the needs of my clients. I am always eager to learn new skills and explore new challenges.</p>
<div className="btn">
<Link href="" className='btn1'>Github</Link>
<Link href="#" className='btn1'>Resume</Link>
</div>
<div className="socials">
  <Link href="https://hashnode.com/">
<Image src={whatsapp} width={50} height={50} color='gray' className='icon' alt='intro'/>
</Link>

<Link href="https://github.com/">
<Image src="/3.png" width={50} height={50} 
className='icon'  alt='intro'/>
</Link>


</div>



      </motion.div>
    </div>
  )
}

export default Intro
