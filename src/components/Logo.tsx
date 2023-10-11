import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Props {
    
}

const Logo = (props: Props) => {
    return (
       <div className='flex items-center justify-center mt-2'>
        <Link href="/" className=' flex items-center justify-center' >
            <Image src="/myLogo.png" alt='logo' width={80} height={80}/>
        </Link>

       </div>
    )
}

export default Logo
