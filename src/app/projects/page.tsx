"use client"

import React from 'react'
import { motion } from "framer-motion"
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'
import github from "../../../public/3.png"
import Github from '@/components/github/github'
import TransitionEffect from '@/components/Transition'

const projects = [
  {
    image: "https://images.pexels.com/photos/9811243/pexels-photo-9811243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Buy_Now",
    description: "Seamless Buying Experience: Browse through a wide range of products across diverse categories, including fashion, electronics, home goods, and more.",
    githubLink: "https://github.com/Fonyuygita/Buy-Now",
    projectLink: "https://buy-now-4e3m.vercel.app/",
    number: 1
  },
  {
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "eXplore_Car",
    description: "Smart Search Functionality: Our advanced search feature enables you to narrow down your options based on specific criteria such as make, model year, price range, fuel efficiency, and more.",
    githubLink: "https://github.com/Fonyuygita/Explore-Car",
    projectLink: "https://explore-car.vercel.app",
    number: 2
  },
  {
    image: "https://images.pexels.com/photos/4559555/pexels-photo-4559555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "LearnCode",
    description: "Curated Content for All Skill Levels: Whether you're a beginner or an advanced learner, LearnCode has carefully curated resources to suit your needs.",
    githubLink: "https://github.com/Fonyuygita/LearnCode",
    projectLink: "https://learn-code-phi.vercel.app/",
    number: 3
  },

  {
    image: "/padisco.png",
    title: "PS-shoes",
    description: "A stunning animated e-commerce website for a shoe company",
    githubLink: "https://github.com/Fonyuygita/LearnCode",
    projectLink: "https://padiscoshoes.vercel.app",
    number: 4
  },
  {
    image: "/nona.png",
    title: "  NSA",
    description: "A stunning animated e-commerce website for a shoe company",
    githubLink: "https://github.com/Fonyuygita/LearnCode",
    projectLink: "https://nonistudents.vercel.app",
    number: 5
  }

];

const Project = () => {
  return (
    <>
      <div className={`${styles.about} !mt-[3rem]`}>
        <TransitionEffect />

        <h1 className={styles.title}>Imagination Trumps <br/> Knowledge</h1>
        <div className={styles.line}></div>
        <motion.p className={styles.desc} initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
          {"Exploring the Uncharted: Imagination's Guiding Light in Tech Ventures"}
        </motion.p>
        <div className="line"></div>
        <div className={styles.container}>
          <div className={`${styles.projects}  ` }>

            {projects.map((project, index) => (
              <div key={index} className={`${styles.project} rounded-lg shadow-lg  hover:shadow-xl p-6 transition-all duration-100 bg-[#111]`}>
                <motion.div  initial={{y:50}} whileInView={{y:0}} transition={{duration:0.8, type:"spring"}}>
                  <div className={styles.projectImage}>
                    <Image src={project.image} alt="project" width={350} height={380} className='img' />
                  </div>
                  <div className={styles.projectDesc}>
                    <div className={styles.title}>
                      <h4>Featured Project</h4>
                      <h2>{project.title}</h2>
                    </div>


                    <div className={styles.btn}>
                      <Link href={project.githubLink} className={styles.icon}>
                        <Image src={github} alt='github' width={30} height={30} className={styles.github}/>
                      </Link>
                      <Link href={project.projectLink}>
                        <button className={styles.btn1}>Live view</button>
                      </Link>
                    </div>
                  </div>
                  <div className={styles.count}>
                    <span className={styles.number}>{project.number}</span>
                  </div>
                </motion.div>
              </div>
            ))}

          </div>
        </div>
      </div>

      <Github/>
    </>
  )
}

export default Project;