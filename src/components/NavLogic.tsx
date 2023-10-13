import Link from "next/link"

import React, { useState } from "react";

import Image from "next/image";


const NavLogic = () => {
    const [open, setOpen] = useState(false)
  



    return (
        <>

            <button className="outline-none" onClick={() => setOpen(!open)}>
                {!open ? (<Image src="/hamburger-menu.svg" width={30} height={30} alt="hamburger" className="block md:hidden" />) :
                    (<Image src="/close.svg" width={30} height={30} alt="close" className="block md:hidden" />)

                }
            </button>
            <ul className="flex items-center justify-center px-3 max-md:hidden md:gap-x-10">
               

                <li className="body-text font-bold text-[#666]">
                    <Link href="/">Home</Link>

                </li>

                <li className="body-text text-[#666] font-bold">

                    <Link href= "/about">About Me</Link>
                </li>

                <li className="body-text text-[#666] font-bold">

                    <Link href= "/articles">Articles</Link>
                </li>

                <li className="body-text text-[#666] font-bold">

<Link href= "/projects">Projects</Link>
</li>
            </ul>


        <ul className={`flex-center gap-x-3  md:gap-x-10 md:hidden flex-col items-center justify-center bg-[#000] h-[200px] w-full absolute top-[120px] gap-8 left-3 right-3 transition duration-500 ease-in-out transform border-b-2 border-black-200 ${open ? 'translate-x-0' : '-translate-x-[1020px]'} text-center`}>
               
                <li className="body-text text-[#666]  my-2" onClick={() => setOpen(false)}>
                    <Link href="/" className=" py-2 relative">Home Page
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 transition-transform duration-500 ease-in-out"></div>
                    </Link>

                </li>

                <li className="body-text text-[#666]   my-2" onClick={() => setOpen(false)}>

                    <Link href="/about">About Me
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 transition-transform duration-500 ease-in-out"></div>
                    </Link>
                </li>

                <li className="body-text text-[#666]-700  my-2" onClick={() => setOpen(false)}>

                    <Link href="/projects"> Projects
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 transition-transform duration-500 ease-in-out"></div>
                    </Link>
                </li>

                <li className="body-text text-[#666]  my-2" onClick={() => setOpen(false)}>

                    <Link href="/articles">Articles
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 transition-transform duration-500 ease-in-out"></div>
                    </Link>
                </li>

            </ul>
        </>
    )
}

export default NavLogic