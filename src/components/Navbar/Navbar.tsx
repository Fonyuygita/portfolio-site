"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../Logo'
import { usePathname } from 'next/navigation'


// lets create our custom link component here

type Props={
  href:string,
  title:string,
  className:string
}

// const hoverLink=(href:string)=>{
//   let state;
// switch(href){
// case '/':
//   state='w-full'
//   break;
//   case '/about':
//     state='w-full'
//     break;
// case '/projects':
//   state='w-full'
//   break;

//   case '/articles':
//   state= 'w-full'
//   break

//   case "/contact":
//     state= 'w-full'
//     break
//   default:
//   state='w-0'
//   break
// }

// return state
// }

const MyLink=({href, title, className}:Props)=>{

const path=usePathname()
console.log(path)

  return(
    <Link href={href} className={`${className} relative group`}>{title}
    
    <span className={`h-[1px] inline-block  bg-green-300 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${path===href ? "w-full" : "w-0"}`}></span>

    </Link>


  )

}


const MyMobileLink=({href, title, className}:Props)=>{

  const path=usePathname()
  console.log(path)
  
    return(
      <button>
<Link href={href} className={`${className} relative group`}>{title}
      
      <span className={`h-[1px] inline-block  bg-green-300 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${path===href ? "w-full" : "w-0"}`}></span>
  
      </Link>
      </button>
      
  
  
    )
  
  }
const Navbar = () => {

  // Handle menu close and button
  const [isOpen, setIsOpen]=useState(false);
  const handleClick=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <header className=' w-full  py-8 font-medium  bg-dark-500 flex items-center justify-between border-b border-green-90 relative lg:py-10 lg:flex lg:justify-between md:gap-13'>


      <button  className="flex flex-col justify-center items-center !bg-none hidden lg:flex pl-2" onClick={handleClick}>
        <span className={`bg-white block  transition-all duration-300  h-0.5 w-6 rounded-sm   ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-white block transition-all duration-300  h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-white block  transition-all duration-300 h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>

      </button>




{/* mobile and mediom screen  */}
{isOpen && (
  <div className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark rounded-lg backdrop-blue-md py-32 2xlg:hidden">
         <button onClick={handleClick}>
      <nav className='text-green-300 flex items-center flex-col justify-center gap- '>
   <MyLink href='/' title='Home' className='mb-4' />
   <MyLink href='/about' title='About' className='mb-4'/>
   <MyLink href='/projects' title='Projects' className='mb-4'/>
   <MyLink href='/articles' title='Articles' className='mb-4'/>

      </nav>
      </button>
      
      <nav className='flex gap-7 items-center justify-center '>
        <Link href="/" target={"_blank"}>
          <Image src="/4.png" alt='' width={30} height={30} className='ring-1 ring-green-100 rounded-full p-2'/>

        </Link>
        <Link href="/" target={"_blank"}>
        <Image src="/5.png" alt='' width={30} height={30} className='ring-1 ring-green-100 rounded-full p-2'/>

        </Link>
        <Link href="/" target={"_blank"} className='flex justify-center align-center'>
        <Image src="/6.png" alt='' width={30} height={30} className='ring-1 ring-green-100 rounded-full p-2'/>

        </Link>


      </nav>
      </div>
)}
      
     

           {/* left items */}
           <div className="w-full flex  justify-between items-center lg:hidden">
      <nav className='text-green-300 '>
   
        <MyLink href='/' title='Home' className='mr-4'/>
   <MyLink href='/about' title='About' className='mx-4'/>
   <MyLink href='/projects' title='Projects' className='mx-4'/>
   <MyLink href='/articles' title='Articles' className='ml-4'/>


      </nav>

      <nav className='flex gap-7 items-center justify-center '>
        <Link href="/" target={"_blank"}>
          <Image src="/4.png" alt='' width={30} height={30} className='ring-1 ring-green-100 rounded-full p-2'/>

        </Link>
        <Link href="/" target={"_blank"}>
        <Image src="/5.png" alt='' width={30} height={30} className='ring-1 ring-green-100 rounded-full p-2'/>

        </Link>
        <Link href="/" target={"_blank"} className='flex justify-center align-center'>
        <Image src="/6.png" alt='' width={30} height={30} className='ring-1 ring-green-100 rounded-full p-2'/>

        </Link>


      </nav>
      
      
      </div>

      {/* LOGO */}
     
      

  {/* <Link href="/" className=' ml-9 '>
    <Image src="/logo.png" alt='' width={70} height={70} className=' ring-1 ring-green-100 rounded-full p-[-2rem]'/>
    </Link>k */}



{/* right items */}
     
     
      <div className="  absolute left-[50%] top-2 translate-x-[-50%]">
      <Logo/>


      </div>
    </header>
  )
}

export default Navbar
