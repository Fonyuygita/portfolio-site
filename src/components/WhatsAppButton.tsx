"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function WhatsAppButton() {
  return (
    <Link 
      href="https://wa.me/237672792563" 
      target="_blank" 
      className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform duration-300 drop-shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center p-3 animate-bounce-subtle">
         {/* Using the image from public folder */}
         <div className="relative w-full h-full">
            <Image 
                src="/whatsapp.png" 
                alt="WhatsApp" 
                fill
                className="object-contain filter brightness-0 invert"
            />
         </div>
      </div>
      {/* Pulse Effect */}
      <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
    </Link>
  )
}
