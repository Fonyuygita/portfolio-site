import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const HireMe = () => {
    return (
        <div className='fixed left-8 bottom-4 flex items-center justify-center md:right-3 md:left-auto md:top-0 md:bottom-auto md:absolute'>
            <div className="w-48 h-auto flex items-center justify-center relative md:w-24 ">
            
                <Image src="/circle.png" className='animate-spin-slow' alt='circular' width={340} height={340}/>
           
            <Link href="mailto:fonyuyjudegita@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-orange-500 text-center font-bold p-2 rounded-full w-20 h-20 self-center md:w-12 md:h-12 md:text-[10px]'>Email Me</Link>

            </div>
            
        </div>
    )
}

export default HireMe