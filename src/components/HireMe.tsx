import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const HireMe = () => {
    return (
        // <div className='fixed bottom-4 left-4 z-10'>
        //     <div className=" flex items-center justify-center relative md:w-24 bg-black rounded-full">
            
        //         <Image src="/circle.png" className='animate-spin-slow' alt='circular' width={100} height={100}/>
           
        //     <Link href="mailto:fonyuyjudegita@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-orange-500 text-center font-bold p-3 rounded-full w-20 h-20 self-center md:w-12 md:h-12 md:text-[10px]'>Email Me</Link>

        //     </div>
            
        // </div>

        <div className="fixed bottom-4 left-4 z-10">
        <Link href="mailto:fonyuyjudegita@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white hover:bg-gray-600 text-white rounded-full p-3 shadow-lg">
      
         <Image src="/email.png" alt="email" width={30} height={30} className="objec-content"/>
          
        </Link>
      </div>

        
    )
}

export default HireMe


