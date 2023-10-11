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
  <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[100%] ml-23 flex flex-col items-center justify-between gap-4 md:w-[80%] sm:w-[100%]'>
    <Circular reference={ref}/>
    <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.8, type:"tween"}}>
        <h4 className='text-2xl font-bold capitalizee text-left text-gray-200 sm:text-xl spacing-3'>{title}</h4>
        <span className='text-lg !text-gray-400 !opacity-1 sm:text-[16px]'>{header}</span>
        <p className='font-medium  text-[#666]  sm:text-[15px]'>{inspiration}</p>
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
        <div className='my-12  relative sm:-mt-5'>
            <h2 className='font-bold text-8xl mb-32 sm:!text-4xl sm:!text-center xs:!text-3xl'>{"Education & Dreams"}</h2>
            <div className='w-[30%] h-[2px] bg-yellow-500 absolute top-[8%] left-[30%] md:hidden'></div>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[100%] md:w-full">

                <motion.div style={{scaleY:scrollYProgress}} className="absolute left-[-7.6%] top-0 w-[2px] h-full  bg-yellow-200 origin-top "/>

             <ul className='w-full flex flex-col items-start gap-3 justify-between ml-25 '>
             <Details title={`Bsc in Computer Science`} header='The future of nation building' inspiration="Pursuing a BSc in computer science is a rewarding and challenging endeavor. Computer science is a field that encompasses many disciplines, such as programming, software engineering, "/>

             <Details title={`Bsc in Mathematics`} header='The language of patterns.
' inspiration="My goal is to become a well-rounded and versatile mathematician and computer scientist who can contribute to the advancement of science and society. 
"/>


             <Details title={`Backend Developer`} header='Managing data, logic, and functionality.
' inspiration="Backend development is the backbone of any software application. It handles the logic, data, and functionality that power the user interface. Backend developers are responsible for creating, maintaining, and optimizing the server-side code that runs behind the scenes.
"/>


             <Details title={`Frontend Developer`} header='Designing web/app user interfaces
' inspiration="Frontend development is the art and science of creating engaging and interactive user interfaces for web applications. It is a challenging and rewarding field that requires creativity, problem-solving skills, and attention to detail. 
"/>


            
             </ul>

            </div>
            
        </div>
    )
}

export default Education
