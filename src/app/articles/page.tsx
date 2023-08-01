import Image from "next/image"
import Link from "next/link"
import  styles  from "./page.module.css"
import { client } from "@/lib/sanity";
import { Post } from "@/lib/types";

async function getData(){
  const query=`*[_type=="post"]`;
  const data=await client.fetch(query)
  return data
}

export default async function Home() {
  const data=(await getData()) as Post[]
    return (
      
   <div className={styles.article}>
      <h1 className={styles.title}>Words Change  <br/>The World</h1>
      <div className={styles.line}></div>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti corporis accusantium rem eveniet eligendi, ve
      </p>
      <div className={styles.container}>
        <div className={styles.projects}>
{data.map((post)=>(
<Link href={`/articles/${post.slug.current}`} className={styles.project} key={post._id}>
<div className={styles.projectImage}>
  <Image src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="project" width={350} height={380} className='img' />
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


</Link>
))}


        </div>



      </div>
    </div>

      
    )
  }
  
  