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
    const ref=useRef();

    return(
  <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between gap-2 md:w-[80%] sm:w-[85%]'>
    <Circular reference={ref}/>
    <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.8, type:"tween"}}>
        <h4 className='text-2xl font-bold capitalizee text-left text-yellow-600 sm:text-xl '>{title}</h4>
        <span className='text-lg !text-gray-300 !opacity-1 sm:text-[14px]'>{header}</span>
        <p className='font-medium w-full text-gray-200 text-gray-500 sm:text-sm'>{inspiration}</p>
    </motion.div>
  </li>
    )
}

const Education = () => {
    const ref=useRef(null)
    const {scrollYProgress}=useScroll(
        {
       target:ref,
       offset:["start end", "center start"]
        }
    )
    return (
        <div className='my-12  relative overflow-hidden'>
            <h2 className='font-bold text-8xl mb-32 sm:!text-4xl sm:!text-center xs:!text-3xl'>{"Education & Dreams"}</h2>
            <div className='w-[30%] h-[2px] bg-yellow-500 absolute top-[8%] left-[30%] md:hidden'></div>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

                <motion.div style={{scaleY:scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-yellow-500 origin-top "/>

             <ul className='w-full flex flex-col items-start justify-between xs:ml-9 md:ml-5'>
             <Details title={`BSC IN Computer Science`} header='The future of nation bbuilding' inspiration="I was fascinated by the power of programming and decided to pursue it as a career. I went to college and majored in computer science, I'm also looking forward to graduating next year and starting my career as a full-time  I have so many"/>

             <Details title={`BSC IN Computer Science`} header='The future of nation bbuilding' inspiration="I was fascinated by the power of programming and decided to pursue it as a career. I went to college and majored in computer science, I'm also looking forward to graduating next year and starting my career as a full-time  I have so many"/>


             <Details title={`BSC IN Computer Science`} header='The future of nation bbuilding' inspiration="I was fascinated by the power of programming and decided to pursue it as a career. I went to college and majored in computer science, I'm also looking forward to graduating next year and starting my career as a full-time  I have so many"/>


             <Details title={`BSC IN Computer Science`} header='The future of nation bbuilding' inspiration="I was fascinated by the power of programming and decided to pursue it as a career. I went to college and majored in computer science, I'm also looking forward to graduating next year and starting my career as a full-time  I have so many"/>


             <Details title={`BSC IN Computer Science`} header='The future of nation bbuilding' inspiration="I was fascinated by the power of programming and decided to pursue it as a career. I went to college and majored in computer science, I'm also looking forward to graduating next year and starting my career as a full-time  I have so many"/>

             </ul>

            </div>
            
        </div>
    )
}

export default Education
