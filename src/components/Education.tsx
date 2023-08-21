"use client"
import React, { useRef } from 'react'
import {motion, useScroll } from 'framer-motion';
import Circular from './Circular';

interface DetailsProps {
title:string;
header:string;
inspiration:string;
    
}

const Details=({title, header, inspiration}:DetailsProps)=>{
    const ref=useRef<HTMLLIElement | null>(null);

    return(
  <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[100%] ml-23 flex flex-col items-center justify-between gap-2 md:w-[80%] sm:w-[100%]'>
    <Circular reference={ref}/>
    <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.8, type:"tween"}}>
        <h4 className='text-2xl font-bold capitalizee text-left text-gray-200 sm:text-xl '>{title}</h4>
        <span className='text-lg !text-gray-500 !opacity-1 sm:text-[14px]'>{header}</span>
        <p className='font-medium w-full text-gray-800 text-[#444] '>{inspiration}</p>
    </motion.div>
  </li>
    )
}

const Education = () => {
    const ref=useRef<HTMLDivElement| null>(null);
    const {scrollYProgress}=useScroll(
        {
       target:ref,
       offset:["start end", "center start"]
        }
    )
    return (
        <div className='my-12  relative'>
            <h2 className='font-bold text-8xl mb-32 sm:!text-4xl sm:!text-center xs:!text-3xl'>{"Education & Dreams"}</h2>
            <div className='w-[30%] h-[2px] bg-yellow-500 absolute top-[8%] left-[30%] md:hidden'></div>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[100%] md:w-full">

                <motion.div style={{scaleY:scrollYProgress}} className="absolute left-[-6%] top-0 w-[2px] h-full  bg-yellow-200 origin-top "/>

             <ul className='w-full flex flex-col items-start gap-3 justify-between ml-25 '>
             <Details title={`Bsc in Computer Science`} header='The future of nation building' inspiration="Pursuing a BSc in computer science is a rewarding and challenging endeavor. Computer science is a field that encompasses many disciplines, such as programming, software engineering, artificial intelligence, data science, cybersecurity, and more. Computer science is also a field that is constantly evolving and innovating, creating new opportunities and solutions for various problems"/>

             <Details title={`Bsc in Mathematics`} header='The language of patterns.
' inspiration="My goal is to become a well-rounded and versatile mathematician and computer scientist who can contribute to the advancement of science and society. I believe that by studying these subjects, I will not only gain a deeper understanding of the world, but also a greater appreciation of its beauty and diversity.
"/>


             <Details title={`Backend Developer`} header='Managing data, logic, and functionality.
' inspiration="Backend development is the backbone of any software application. It handles the logic, data, and functionality that power the user interface. Backend developers are responsible for creating, maintaining, and optimizing the server-side code that runs behind the scenes. They use various tools and languages, such as Python, Java, Ruby, PHP, Node.js, SQL, and more, to build scalable, secure, and efficient web services and APIs. Backend development is a challenging and rewarding career that requires creativity, problem-solving skills, and attention to detail. If you are passionate about building software that makes a difference in the world, backend development might be the perfect fit for you.
"/>


             <Details title={`Frontend Developer`} header='Designing web/app user interfaces
' inspiration="Frontend development is the art and science of creating engaging and interactive user interfaces for web applications. It is a challenging and rewarding field that requires creativity, problem-solving skills, and attention to detail. Frontend developers use a variety of tools and technologies to bring their designs to life, such as HTML, CSS, JavaScript, frameworks, libraries, and APIs. Frontend development is constantly evolving and adapting to the needs and expectations of users and clients. It is a great opportunity to learn new skills, explore new possibilities, and make a positive impact on the web.
"/>


            
             </ul>

            </div>
            
        </div>
    )
}

export default Education
