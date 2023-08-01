import React, { useEffect } from 'react'
import "./github.css"
import Image from 'next/image'
import Link from 'next/link'

// github array here







const Github:React.FC = () => {

  return(
    <>
    <div className="githubContainer">
    <h1 className="githubTitle">Wants To See All </h1>
    <div className="line"></div>
     <div className="gitImage">

      <Image src="/gitGragph.png" alt='github' width={300} height={250} className='img'/>
     </div>

     <Link href="#" className="githubBtn">
<span>On Github</span>
<Image src="/3.png" alt='github' width={20} height={20}/>
     </Link>
      </div>
    
  </>
  )
}

export default Github;
