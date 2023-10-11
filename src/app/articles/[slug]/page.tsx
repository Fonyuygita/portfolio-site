import { client } from "@/lib/sanity";
import { Post } from "@/lib/types";
import styles from "./page.module.css"
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanityImageUrl";

async function getData(slug:string){
    const query=`*[_type=="post" && slug.current=="${slug}"][0]`;
    const data=await client.fetch(query);

    return data;
}

export default async function SlugPage({params}:{params:{slug:string}}){
    const data =(await getData(params.slug)) as Post;
    const PortableTextComponent={
        types:{
            Image:({value}:{value:any})=>(
                <Image src={urlFor(value).url()} alt="image" className={styles.img} width={600} height={600}/>
            )
        }
    }

    return(
        <div className={`${styles.container} !mt-[3rem]`}>
            <p className={styles.date}>
            {new Date(data._createdAt).toISOString().split("T")[0]}
            </p>

            <div className={styles.body}>
<div className={styles.title}>
<h1 className={styles.header}>{data.title}</h1>
<div className={styles.line}></div>
</div>
<div className={styles.desc}>
    <PortableText value={data.content} components={PortableTextComponent} />
</div>

            </div>
        </div>
    )
}