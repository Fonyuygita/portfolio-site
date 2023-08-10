import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    
}

const Logo = (props: Props) => {
    return (
       <div className='flex items-center justify-center mt-2'>
        <Link href="/" className='w-16 h-16 bg-yellow-500 text-dark flex items-center justify-center rounded-full text-2xl font-bold' >FG</Link>

       </div>
    )
}

export default Logo
