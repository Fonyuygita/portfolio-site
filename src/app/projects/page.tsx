import React from 'react'

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
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti corporis accusantium rem eveniet eligendi, ve
      </p>
      <div className={styles.container}>
        <div className={styles.projects}>

<Link href="#" className={styles.project}>
<div className={styles.projectImage}>
  <Image src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="project" width={350} height={380} className='img' />
</div>
<div className={styles.projectDesc}>
<div className={styles.title}>
  <h4>Featured Project</h4>
  <h2>Golazo Futbalo </h2>
</div>

<div className={styles.desc}>
  <p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores maxime fuga reiciendis est nemo consequuntur temporibus sunt voluptates adipisci assumenda laboriosam, delectus cum!
  </p>
</div>

<div className={styles.btn}>
  <div className={styles.icon}>
  <Image src={github} alt='github' width={30} height={30} className={styles.github}/>

  </div>
  <button className={styles.btn1}>Visit Project</button>
</div>
</div>


</Link>


<Link href="#" className={styles.project}>
<div className={styles.projectImage}>
  <Image src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="project" width={350} height={380} className='img' />
</div>
<div className={styles.projectDesc}>
<div className={styles.title}>
  <h4>Featured Project</h4>
  <h2>Golazo Futbalo </h2>
</div>

<div className={styles.desc}>
  <p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores maxime fuga reiciendis est nemo consequuntur temporibus sunt voluptates adipisci assumenda laboriosam, delectus cum!
  </p>
</div>

<div className={styles.btn}>
  <div className={styles.icon}>
  <Image src={github} alt='github' width={30} height={30} className={styles.github}/>

  </div>
  <button className={styles.btn1}>Visit Project</button>
</div>
</div>


</Link>



<Link href="#" className={styles.project}>
<div className={styles.projectImage}>
  <Image src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="project" width={350} height={380} className='img' />
</div>
<div className={styles.projectDesc}>
<div className={styles.title}>
  <h4>Featured Project</h4>
  <h2>Golazo Futbalo </h2>
</div>

<div className={styles.desc}>
  <p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores maxime fuga reiciendis est nemo consequuntur temporibus sunt voluptates adipisci assumenda laboriosam, delectus cum!
  </p>
</div>

<div className={styles.btn}>
  <div className={styles.icon}>
  <Image src={github} alt='github' width={30} height={30} className={styles.github}/>

  </div>
  <button className={styles.btn1}>Visit Project</button>
</div>
</div>



</Link>

        </div>



      </div>
    </div>

<Github/>
    </>
  )
}

export default Project
