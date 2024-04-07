
"use client"

import Image from "next/image";
import Link from "next/link";
import NavLogic from "../NavLogic";




const Navbar=()=>{
   
   


     


    return(
  <nav className="flex items-center justify-center fixed top-0 z-50 w-full border-b-2 bg-[#000] border-gray-600 py-7 text-white e mr-6">
    <div className="flex flex-center justify-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
        <Image src="/myLogo.png" alt="logo" width={60} height={50} className="border border-white border-[50%] rounded-full"/>
        </Link>
      
    <NavLogic/>
    </div>
  </nav>
    )
}

export default Navbar