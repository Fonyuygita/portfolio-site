import Image from "next/image"
import React from "react"

const Whatsapp=()=>{
    return(
        <div className="fixed bottom-4 right-4 z-10">
  <a href="https://wa.me/+237672792563" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg">

   <Image src="/whatsapp.png" alt="whatsapp" width={30} height={30} className="objec-content"/>
    
  </a>
</div>
    )
}

export default Whatsapp