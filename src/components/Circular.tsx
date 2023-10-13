import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'

type ReferenceType={
    reference:React.RefObject<HTMLElement>;
}

const Circular = ({reference}:ReferenceType) => {
   
    const {scrollYProgress}=useScroll({
        target:reference,
        offset:["center end", "center center"]
 
    })
    return (
     <figure ref={reference} className=' absolute left-[-34px]  stroke-dark '>
<svg width="75" height="75" viewBox='0 0 100 100' className='-rotate-90'>
 <circle cx="75" cy="50" r="20" className='strock-dark stroke-1 fill-yellow-300'/>
 <motion.circle style={{pathLength:scrollYProgress}} cx="75" cy="50" r="20" className=' stroke-[5px] fill-red-500'/>
 <circle cx="75" cy="50" r="20" className='animate-pulse stroke-1 fill-green-400'/>



</svg>
     </figure>
    )
}

export default Circular
