import Image from 'next/image'
import React from 'react'
import Text from './Text'
import image from "../../../public/me.png"
import whatsapp from "../../../public/4.png"
import github from "../../../public/5.png"



import   "./intro.css"
import Link from 'next/link'

const Intro = () => {
  return (
    <div className='container'>
      <div className="left">
<div className="imgContainer">
    <Image src="/my.png" width={300} height={270}  alt='intro' className='img'/>
</div>

      </div>
      <div className="right">
        <h1><span className='first !text-green-300 !font-bold-200'>My Name Is</span> Fonyuy Gita</h1>

<p>I am a Full Stack Developer . I have worked with various technologies and frameworks, such as React(NextJs), , Node.js, Firebase, and Flutter. I am passionate about creating user-friendly, scalable, and secure solutions that meet the needs of my clients. I am always eager to learn new skills and explore new challenges.</p>
<div className="btn">
<Link href="" className='btn1'>Github</Link>
<Link href="#" className='btn1'>Resume</Link>
</div>
<div className="socials">
<Image src={whatsapp} width={40} height={40} color='gray' className='icon' alt='intro'/>
<Image src={github} width={40} height={40} color='gray'  className='icon' alt='intro'/>
<Image src={whatsapp} width={40} height={40} className='icon'  alt='intro'/>



</div>



      </div>
    </div>
  )
}

export default Intro
