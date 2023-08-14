"use client"
import React from 'react'
import "./Skills.css"
import {motion} from "framer-motion"

type PropsType={
    name:string,
    x:string,
    y:string
}
const Skill=(Props:PropsType)=>{
    return(
    <motion.div className="item1" whileHover={{scale:1.05}} initial={{x:0, y:0}} whileInView={{x:Props.x, y:Props.y}} transition={{duration:1.5}} viewport={{once:true}}>{Props.name}</motion.div>
    )

}
const Skills = () => {
  return (
    <>
    <h1 className="skills-h1">Skills</h1>
    <div className="line"></div>
    <div className="skills-body">
        <motion.div className="item1" whileHover={{scale:1.05}}>Web</motion.div>
        <Skill name=' Sass' x="-22vw" y="-2vw"/>
        <Skill name=' Appwrite' x="-25vw" y="-8vw"/>

        <Skill name='Tailwind Css' x="-5vw" y="-10vw"/>
        <Skill name='ReactJs' x="20vw" y="6vw"/>
        <Skill name='NextJs' x="0vw" y="12vw"/>
        <Skill name='NodeJs' x="15vw" y="-12vw"/>
        <Skill name='MongoDb' x="32vw" y="-5vw"/>
        <Skill name='Typescript' x="8vw" y="-20vw"/>
        <Skill name='Firebase' x="-25vw" y="18vw"/>
        <Skill name='Git/Github' x="18vw" y="18vw"/>
         
         
        <Skill name='Prisma' x="-12vw" y="5vw"/>
        <Skill name='Postgre sql' x="0vw" y="-16vw"/>
        <Skill name='Redux' x="0vw" y="19vw"/>
        <Skill name='React Native' x="-15vw" y="12vw"/>
        {/* <Skill name='Drizzle' x="10vw" y="17vw"/>
        <Skill name='Mysql' x="3vw" y="-12vw"/>
        <Skill name='Web Automation' x="0vw" y="19vw"/>
        <Skill name='WordPress' x="3vw" y="4vw"/>
        

        


 */}


    </div>
      
    </>
  )
}

export default Skills
