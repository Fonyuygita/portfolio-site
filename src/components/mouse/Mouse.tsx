import React from 'react'
import "./Mouse.css"
import Image from 'next/image'
import mouse from "../../../public/mouse.png"
const Mouse = () => {
  return (
        
    <div className='mouse'>
        
      <Image src={mouse} alt='mouse' width={45} height={45} className='m'/>
    </div>

  )
}

export default Mouse
