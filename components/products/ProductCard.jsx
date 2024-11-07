import React from 'react'
import { IoIosDownload } from "react-icons/io";
import img from "@/public/hampers/1.jpeg"
import { FaEye } from "react-icons/fa";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'
import TalkToUsBTN from '../TalkToUsBTN'
import Link from 'next/link';
function ProductCard({setVisible,name,thumbnail,insideImages,pdfFile,setActiveProduct}) {
  
  return (
    <Card>
    <CardHeader className="">
        <div className='flex justify-center w-full relative group'>
      <Image src ={thumbnail} alt="product" width={"200"} height={"200"} className='w-full'/>  
          <div className="absolute inset-0 bg-[rgb(0,0,0,0)] group-hover:bg-[rgb(0,0,0,0.3)] duration-500  text-xl flex justify-center items-center gap-x-3">
            <div className="opacity-0 group-hover:opacity-100 flex gap-x-2">
              <div className="bg-black flex items-center justify-center h-8 w-8 rounded-lg" >
          <Link href={pdfFile}><IoIosDownload className='text-white cursor-pointer'/></Link>
          
          </div>
              <div className="bg-black flex items-center justify-center h-8 w-8 rounded-lg" >
                
              <FaEye onClick={(e)=>{setActiveProduct(e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[0].textContent); setVisible(true)}} className='text-white  cursor-pointer'/>
          </div>
          </div>
      </div>
      </div>
    </CardHeader>
    <CardContent className="flex justify-center">
    <CardTitle className="uppercase tracking-wider font-bold text-gray-700 mt-2 text-[1rem]">{name}</CardTitle>
    </CardContent>
    <CardFooter className="flex justify-center">
    <TalkToUsBTN className={"rounded-none shadow-none"}/>
    </CardFooter>
  </Card>
  )
}

export default ProductCard
