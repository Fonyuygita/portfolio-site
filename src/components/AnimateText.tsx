
"use client"
import React from 'react'

import {motion} from "framer-motion"
interface TextProps {
    text:string;
    className:string;
    
}

// // animations styles here

// const quotes={
//     initial:{
//         opacity:1,
//     },

//     animate:{
//         opacity:1,
//         transition:{
//             delay:0.5,
//             staggerChildren:0.08,
//         }
//     }
// }

const singleWord={
    intial:{
        opacity:0,
        y:50
    },
    animate:{
        opacity:1,
        y:0,

    }
}

const AnimateText = ({text, className=""}:TextProps) => {
    return (
        <div className='w-full mx-auto py-3 flex items-center justify-center text-center overflow-hidden my-3'>
            <motion.h1 className={`inline-block w-full text-grey leading-normal font-bold capitalize  text-8xl my-2 ${className}`} initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                {/*get each word here */}
             
        {text.split(" ").map((word, index)=>(
            <motion.span key={word+"-"+index} className='inline-block' initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                {word}&nbsp;
                
            </motion.span>
        ))}
                
            </motion.h1>
        </div>
    )
}

export default AnimateText
