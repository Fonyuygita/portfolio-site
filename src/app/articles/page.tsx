import Image from "next/image"
import Link from "next/link"
import  styles  from "./page.module.css"
import { client } from "@/lib/sanity";
import { Post } from "@/lib/types";
import TransitionEffect from "@/components/Transition";

async function getData(){
  const query=`*[_type=="post"]`;
  const data=await client.fetch(query)
  return data
}

export default async function Home() {
  const data=(await getData()) as Post[]
    return (
      
   <div className={styles.about}>
<TransitionEffect/>

      <h1 className={styles.title}>Words Change  <br/>The World</h1>
      <div className={styles.line}></div>
      <p className={styles.desc}>
      Words have the power to shape our reality, influence our behavior, and inspire our actions. Technology is a tool that amplifies the impact of words, allowing us to communicate faster, wider, and deeper than ever before. Technology also enables us to create new forms of expression, such as digital art, social media, and artificial intelligence
      </p>
      <div className={styles.container}>
        <div className={styles.projects}>
{data.map((post)=>(
<Link href={`/articles/${post.slug.current}`} className={styles.project} key={post._id}>
<div className={styles.projectImage}>
  <Image src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600" alt="article" width={350} height={380} className='img' />
</div>
<div className={styles.projectDesc}>
<div className={styles.title}>
  <h4>{new Date(post._createdAt).toISOString().split("T")[0]}</h4>
  <h2>{post.title}</h2>
</div>

<div className={styles.desc}>
  <p>
  {post.overview}
  </p>
</div>

<div className={styles.btn}>
 
  <button className={styles.btn1}>Read Article</button>
</div>
</div>

<div className={styles.count}>
  <span className={styles.number}>R</span>
</div>
</Link>
))}


        </div>



      </div>
    </div>

      
    )
  }
  
  