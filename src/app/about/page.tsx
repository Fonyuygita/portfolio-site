import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import icon1 from "../../../public/4.png"
import icon2 from "../../../public/5.png"
import icon3 from "../../../public/6.png"
import about from "../../../public/aboutMe.png"
import Link from 'next/link'
import Skills from '@/components/skills/Skills'
import TransitionEffect from '@/components/Transition'



const About = () => {
  return (
   
    <div className={styles.about}>
<TransitionEffect/>
        <h2>Passion Fuels <br/>
        <span>Purpose</span></h2>
        <div className={styles.line}></div>
      <div className={styles.section}>

        <div className={styles.aboveSection}>
      <div className={styles.left}>
      <div className={styles.bio}>
        <div className={styles.title}>
        <h3>About Me</h3>
        <div className={styles.line}></div>
        </div>
   
        
        <p>Hi, I'm a developer and this is my story. I started coding when I was 19 years old, after I was intrigue by how someone could navigate from one page to another while using software applications, thought this was magic, and decided to give it a go.
          <br/>I was fascinated by the power of programming and decided to pursue it as a career. I went to college and majored in computer science, I'm also looking forward to graduating next year and starting my career as a full-time developer. I have so many goals and dreams that I want to achieve. I want to work on projects that have a positive impact on the world, collaborate with other passionate developers, and keep learning new technologies and frameworks.
.
```.</p>
      {/* <a href="" className={styles.btn}>Read More</a> */}
      </div>
        
      </div>
      <div className={styles.image}>
        <div className={styles.box}>
        <Image src={about} alt="image" width={380} height={400} className={styles.img}/>

        </div>
        <div className={styles.desc}>
          <h3 className={styles.title}>Fonyuy Gita</h3>
          <div className={styles.socials}>
            <Link href="#" className={styles.icon}>
            <Image src={icon1} width={26} height={26} alt='icon'/>
              
            </Link>
            <Link href="#"  className={styles.icon}>
            <Image src={icon2} width={26} height={26} alt='icon'/>

            </Link>
         

     <Link href="#" className={styles.icon}>
     <Image src={icon3} width={26} height={26} alt='icon'/>

     </Link>

          

          </div>
        </div>
      </div>
      </div>


      <div className={styles.bottom}>
<h3>My Skills & Aspiration</h3>
<div className={styles.line}></div>
<div className={styles.pSection}>



<div className={styles.pBox}>
  <div className="imgs">
  <Image src={icon3} alt='skill' width={40} height={40} />
  </div>
  <div className="boxDesc">
 <div className={styles.progress}>
  <div className={styles.fill}></div>
 </div>
 
 <div className="desc">
  <h5 className='lan'>Js</h5>
  <p className='desc'>As a developer, I am passionate about creating innovative and impactful solutions for real-world problems. I have a strong background in web development, data science, and machine learning, and I enjoy learning new technologies and frameworks. I have worked on various projects, such as building a chatbot, a recommender system, and a sentiment analysis tool, using Python, JavaScript, HTML, CSS, Flask, Nodejs, TensorFlow, and Scikit-learn. I am always eager to challenge myself and improve my skills and knowledge.</p>
 </div>
 </div>

 <div className="level">
 <h4>30+</h4>
<span className='pName'>Projects</span>
  </div>
</div>






 </div>



      </div>

      </div>

      <Skills/>
      
    </div>
  )
} 

export default About
