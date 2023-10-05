"use client"

import React from 'react'
import {motion} from "framer-motion"
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'
import github from "../../../public/3.png"
import Github from '@/components/github/github'
import TransitionEffect from '@/components/Transition'

const Project = () => {
  return (
    <>
    <div className={styles.about}>
<TransitionEffect/>

      <h1 className={styles.title}>Imagination Trumps <br/> Knowledge</h1>
      <div className={styles.line}></div>
      <motion.p className={styles.desc} initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
      {"Exploring the Uncharted: Imagination's Guiding Light in Tech Ventures"}
      </motion.p>
      <div className="line"></div>
      <div className={styles.container}>
        <div className={`${styles.projects}  ` }>

<Link href="#" className={`${styles.project} rounded-lg shadow-lg  hover:shadow-xl p-6 transition-all duration-100 bg-[#000]`}>
  <motion.div  initial={{y:50}} whileInView={{y:0}} transition={{duration:0.8, type:"spring"}}>
<div className={styles.projectImage}>
  <Image src="https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="project" width={350} height={380} className='img' />
</div>
<div className={styles.projectDesc}>
<div className={styles.title}>
  <h4>Featured Project</h4>
  <h2>Buy_Now</h2>
</div>

<div className={styles.desc}>
  <motion.p>
  Seamless Buying Experience: Browse through a wide range of products across diverse categories, including fashion, electronics, home goods, and more. 

  </motion.p>
</div>

<div className={styles.btn}>
  <div className={styles.icon}>
  <Image src={github} alt='github' width={30} height={30} className={styles.github}/>

  </div>
  <button className={styles.btn1}>Visit Project</button>
</div>
</div>
<div className={styles.count}>
  <span className={styles.number}>1</span>
</div>
</motion.div>
</Link>


<Link href="#" className={`${styles.project} rounded-lg shadow-lg  hover:shadow-xl p-6 transition-all duration-100 bg-[#000]` }>
<motion.div  initial={{y:50}} whileInView={{y:0}} transition={{duration:0.8, type:"spring"}}>

<div className={styles.projectImage}>
  <Image src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600" alt="project" width={350} height={380} className='img' />
</div>
<div className={styles.projectDesc}>
<div className={styles.title}>
  <h4>Featured Project</h4>
  <h2>eXplore_Car</h2>
</div>

<div className={styles.desc}>
  <motion.p initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
  Smart Search Functionality: Our advanced search feature enables you to narrow down your options based on specific criteria such as make, model year, price range, fuel efficiency, and more. 
  </motion.p>
</div>

<div className={styles.btn}>
  <div className={styles.icon}>
  <Image src={github} alt='github' width={30} height={30} className={styles.github}/>

  </div>
  <button className={styles.btn1}>Visit Project</button>
</div>
</div>

<div className={styles.count}>
  <span className={styles.number}>2</span>
</div>

</motion.div>
</Link>



<Link href="#" className={` ${styles.project} rounded-lg shadow-lg  hover:shadow-xl p-6 transition-all duration-100 bg-[#000]`}>
<motion.div  initial={{y:50}} whileInView={{y:0}} transition={{duration:0.8, type:"spring"}}>

<div className={styles.projectImage}>
  <Image src="https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="project" width={350} height={380} className='img' />
</div>
<div className={styles.projectDesc}>
<div className={styles.title}>
  <h4>Featured Project</h4>
  <h2>LearnCode</h2>
</div>

<div className={styles.desc}>
  <p>
  {"Curated Content for All Skill Levels: Whether you're a beginner or an advanced learner, LearnCode has carefully curated resources to suit your needs."} 
  </p>
</div>

<div className={styles.btn}>
  <div className={styles.icon}>
  <Image src={github} alt='github' width={30} height={30} className={styles.github}/>

  </div>
  <button className={styles.btn1}>Visit Project</button>
</div>
</div>


<div className={styles.count}>
  <span className={styles.number}>3</span>
</div>
</motion.div>

</Link>

        </div>



      </div>
    </div>

<Github/>
    </>
  )
}

export default Project
