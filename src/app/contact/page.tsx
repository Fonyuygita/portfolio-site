import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image';
import TransitionEffect from '@/components/Transition';

interface Props {

}
const err = true;

const page = (props: Props) => {
    return (
        <div className={styles.contact}>
<TransitionEffect/>

            <h1 className={styles.title}>Contact Me For Your Projects</h1>
            <div className={styles.line}></div>
            <div className={styles.info}>
                <div className={styles.number}>
                    <div className={styles.img}>
                        <Image src="/phone.png" alt='' width={30} height={30} />

                    </div>
                    <span>+237 672 792 563</span>
                </div>
                <div className={styles.email} >
                    <div className={styles.img}>
                        <Image src="/email.png" alt='' width={30} height={30} />

                    </div>
                    <span>fonyuyjudegita@gmail.com</span>

                </div>


            </div>
            <div className={styles.container}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder='first name' required />
                    <input type="text" placeholder='last name' required />
                    <textarea name="" id="" cols={30} rows={6} placeholder='message' required  className={styles.area}/>
                    <button className={styles.btn} type='submit'>Send</button>
                </form>
                {err && <p className='error'>message was not send</p>}
            </div>

            <div className={styles.googleMap}>
 <iframe width="100%" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=futru%20%20Nkwen&t=k&z=13&ie=UTF8&iwloc=&output=embed"  scrolling="no"  ></iframe>
  </div>


        </div>
    )
}
export default page

