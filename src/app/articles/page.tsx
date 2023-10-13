import Image from "next/image"
import Link from "next/link"
import  styles  from "./page.module.css"
// import { client } from "@/lib/sanity";
// import { Post } from "@/lib/types";
// import TransitionEffect from "@/components/Transition";
import ResourceCart from "@/components/Resources";


export default async function Home() {
  
    return (

<div className="my-[8rem] flex w-full  justify-center gap-16 sm:justify-start">
  
    <ResourceCart/>

</div>
      
    )
  }
  
  