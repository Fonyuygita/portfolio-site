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
      <div className="right !w-full !text-center shadow-lg  hover:shadow-xl p-3 transition-all duration-100 bg-[#000]">
        
       
        <h1 className="!text-2xl !text-center max-md:!text-xl !mb-3 text-[#888]">{"I'm Fonyuy Jude.I Turn Vision Into Reality With Code And Design|"}</h1>

<p>I am a Full Stack Developer . I have worked with various technologies and frameworks, such as React(NextJs), , Node.js, Firebase, and Flutter. I am passionate about creating user-friendly, scalable, and secure solutions that meet the needs of my clients. I am always eager to learn new skills and explore new challenges.</p>
<div className="flex flex-start mt-4 items-left">
<Link href="https://github.com/Fonyuygita" target="_blank" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4 transition duration-300 ease-in-out transform hover:scale-110'>Github</Link>

<Link href="https://drive.google.com/file/d/1UMpNy9_kTF5JJ5X-rj44SU8i9rh07PmY/view?usp=drive_link" target="_blank" className='flex flex-center justify-center gap-1 bg-[#d6491d] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110'>
<Image src="/downloads.svg" width={20} height={20} alt="icon"/>
<span>Resume</span>
</Link>

</div>
{/* <div className="socials">
  <Link href="https://hashnode.com/">
<Image src={whatsapp} width={50} height={50} color='gray' className='icon' alt='intro'/>
</Link>

<Link href="https://github.com/">
<Image src="/3.png" width={50} height={50} 
className='icon'  alt='intro'/>
</Link>


</div> */}



      </div>
    </div>
  )
}

export default Intro
