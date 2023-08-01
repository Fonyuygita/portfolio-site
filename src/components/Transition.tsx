'use client'
import React from 'react'
import {motion} from "framer-motion"  
import "./test.css"




const TransitionEffect = () => {
    return (
        <>
          <motion.div className="fixed top-0 left-0 rw-full h-full  w-screen h-screen z-30 bg-green-300" initial={{x:"100%", width:"100%"}} animate={{x:"0%", width:"0%"}} transition={{duration:0.8, ease:"easeInOut"}} /> 
         
          <motion.div className="fixed top-0 left-0 rw-full h-full  w-screen h-screen z-20 bg-red-200" initial={{x:"100%", width:"100%"}} animate={{x:"0%", width:"0%"}} transition={{delay:0.2, duration:0.8, ease:"easeInOut"}} /> 

         <motion.div className="fixed top-0 left-0 rw-full h-full  w-screen h-screen z-10 bg-yellow-300" initial={{x:"100%", width:"100%"}} animate={{x:"0%", width:"0%"}} transition={{delay:0.4, duration:0.8, ease:"easeInOut"}} /> 
          
        
        </>
    )
}

export default TransitionEffect
