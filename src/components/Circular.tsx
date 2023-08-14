import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'



const Circular = ({reference}:any) => {
   
    const {scrollYProgress}=useScroll({
        target:reference,
        offset:["center end", "center center"]
 
    })
    return (
     <figure ref={reference} className='absolute left-0 stroke-dark'>
<svg width="75" height="75" viewBox='0 0 100 100' className='-rotate-90'>
 <circle cx="75" cy="50" r="20" className='strock-dark stroke-1 fill-red-200'/>
 <motion.circle style={{pathLength:scrollYProgress}} cx="75" cy="50" r="20" className=' stroke-[5px] fill-red-500'/>
 <circle cx="75" cy="50" r="20" className='animate-pulse stroke-1 fill-yellow-300'/>



</svg>
     </figure>
    )
}

export default Circular
