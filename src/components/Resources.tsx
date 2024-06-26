import  Image  from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from "next/link";



interface Props{
    id:number
    title:string;
    img:string;
    link:string

}
const data:Props[]=[
    {
        id:1,
        title:"Google it like a Pro",
        img:"https://images.pexels.com/photos/5417844/pexels-photo-5417844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link:"https://fonyuyjudefomonyuy.hashnode.dev/how-to-google-it-like-programmer"   
    },

    {
        id:2,
        title:"Five books every Programmer should read",
        img:"https://images.pexels.com/photos/2465877/pexels-photo-2465877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link:"https://fonyuyjudefomonyuy.hashnode.dev/four-books-i-think-every-programmer-should-read"   
    },

    {
        id:3,
        title:"Typescript Or Javascript, what to use.",
        img:"https://images.pexels.com/photos/1181257/pexels-photo-1181257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        link:"https://dev.to/fonyuygita/typescript-or-javascript--2kg0"   
    },



    {
      id:4,
      title:"Did Bun.js just kill NodeJS ",
      img:"/bun.png",
      link:"https://dev.to/fonyuygita/bunjs-a-fast-and-efficient-javascript-runtime-1gnm"   
  },


  {
    id:5,
    title:"ChatGpt evil twins are Here ",
    img:"/gpt.png",
    link:"https://dev.to/fonyuygita/chatgpts-evil-twins-are-here-4hd4"   
},

{
  id:6,
  title:" Introduction to Backend Security in NodeJs",
  img:"/backend.png",
  link:"https://dev.to/fonyuygita/introduction-to-backend-security-5dlp"   
},

{
  id:7,
  title:"How to get started as a newbie in Tech",
  img:"/newbie.png",
  link:"https://dev.to/fonyuygita/staying-consistent-and-motivated-as-a-newbie-in-coding-and-tech-285n"   
},

{
  id:8,
  title:"why learn web (javascript) ML(machine learning) 2024",
  img:"/webml.png",
  link:"https://dev.to/fonyuygita/why-learn-web-javascript-mlmachine-learning-2024-2ef1"   
},


    
]

const ResourceCart=()=>{
    return(
        <div className=" grid  grid-cols-4 max-md:grid-cols-1 gap-4">
            {data.map((item)=>(



<div className="box bg-[#111] rounded-lg shadow-lg  hover:shadow-xl p-4 transition-all duration-100" key={item.id}>
<Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px] max-h-[300px]">

  <CardHeader className="flex justify-center items-center flex-col gap-2.5 !p-0">
    <div className="h-fit w-full">
      <Image 
        src={item.img}
        className="h-[200px] rounded-md object-fit sm:w-[240px] md:h-full mx-auto"
        width={384}
        height={440}
        alt={item.title}
      />
    </div>
    <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{item.title}</CardTitle>
  </CardHeader>

<CardContent className="flex-between mt-4 p-0">
  
  <Link href={item.link}  className="flex items-center flex-between text-green-700 body-semibold gap-1.5">
  Read Blog
    <Image src="/arrow-blue.svg" width={13} height={10} alt="arrow" />
  </Link>
</CardContent>
</Card>
</div>

            ))}
      
      </div>
    )
}

export default ResourceCart