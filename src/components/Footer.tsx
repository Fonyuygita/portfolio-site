import { LucideProps } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";
// import {} from "react-icons/fc"

interface Props {
    
}

type ExtendedLucideProps = LucideProps & {
    rel: string;
  };

const Footer = (props: Props) => {
    return (
        <div className='flex flex-col w-full bg-dark text-gray-600 mt-[4rem]'>
            {/* google map goes here */}
            <div className="w-full h-full">
            <iframe width="100%" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=futru%20%20Nkwen&t=k&z=13&ie=UTF8&iwloc=&output=embed"  scrolling="no"  ></iframe>
  </div>


            

            { /* contact details */}
         <div className="fixed  h-12 md:h-24 w-full mx-auto  bottom-0 bg-black text-white p-3 flex flex-col mt-6  justify-center items-center md:flex-row">

         <div className="flex space-x-4"> 



<Link href="https://wa.me/+237672792563" target="_blank " rel="noopener noreferrror" >
<FaWhatsapp size={27} color='#fff'/>
</Link>

<Link href="">
{/* <Image src="/linkedin.png" alt="github" width={24} height={24} /> */}
<FaLinkedin size={27} color='#fff'/>
</Link>

<Link href="https://twitter.com/fonyuyjude1">
<FaSquareXTwitter color='#fff' size={27}/>
</Link>

<Link href="https://github.com/Fonyuygita">
<FaGithub color='#fff' size={27} />
</Link>


</div>
         </div>

            
        </div>
    )
}

export default Footer
