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
import Education from '@/components/Education'



const About = () => {
  return (

    <div className={styles.about}>
      <TransitionEffect />
      <h2>Passion Fuels <br />
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


              <p className='sm-!text-[15px]'>{`Hi, I'm a developer and this is my story. I started coding when I was 19 years old, after I was intrigue by how someone could navigate from one page to another while using software applications, thought this was magic, and decided to give it a go.
                <br />I was fascinated by the power of programming and decided to pursue it as a career. I went to college and majored in computer science, I'm also looking forward to graduating next year and starting my career as a full-time developer. I have so many goals and dreams that I want to achieve. I want to work on projects that have a positive impact on the world, collaborate with other passionate developers, and keep learning new technologies and frameworks.
                .
                `}</p>
              {/* <a href="" className={styles.btn}>Read More</a> */}
            </div>

          </div>
          <div className={styles.image}>
            <div className={styles.box}>
              <Image src="/image.png" alt="image" width={380} height={400} className={styles.img} />

            </div>
            <div className={styles.desc}>
              <h3 className={styles.title}>Fonyuy Gita</h3>
              <div className={styles.socials}>
                <Link href="#" className={styles.icon}>
                  <Image src={icon1} width={26} height={26} alt='icon' />

                </Link>
                <Link href="#" className={styles.icon}>
                  <Image src="/3.png" width={26} height={26} alt='icon' />

                </Link>


                <Link href="#" className={styles.icon}>
                  <Image src={icon3} width={26} height={26} alt='icon' />

                </Link>



              </div>
            </div>
          </div>
        </div>


        <div className={styles.bottom}>
          <Education/>
        </div>

      </div>

      <Skills />

    </div>
  )
}

export default About
