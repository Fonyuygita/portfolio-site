import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    
}

const Logo = (props: Props) => {
    return (
       <div className='flex items-center justify-center mt-2'>
        <Link href="/" className='w-16 h-16 bg-green-300 text-dark flex items-center justify-center rounded-full text-2xl font-bol' >FG</Link>

       </div>
    )
}

export default Logo
