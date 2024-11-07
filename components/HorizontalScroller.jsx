"use client"
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

function ProductCard() {
  return (
    <Card>
    <CardHeader>
        <div className='flex justify-center w-full relative group'>
      <Image src ={img} alt="product" width={"200"} height={"200"} className='w-full'/>  
          <div className="absolute inset-0 bg-[rgb(0,0,0,0)] group-hover:bg-[rgb(0,0,0,0.3)] duration-500  text-xl flex justify-center items-center gap-x-3">
            <div className="opacity-0 group-hover:opacity-100 flex gap-x-2">
              <div className="bg-black flex items-center justify-center h-8 w-8 rounded-lg" >
          <IoIosDownload className='text-white cursor-pointer'/>
          
          </div>
              <div className="bg-black flex items-center justify-center h-8 w-8 rounded-lg" >
              <FaEye onClick={()=>setVisible(true)} className='text-white  cursor-pointer'/>
          </div>
          </div>
      </div>
      </div>
    </CardHeader>
    <CardContent className="flex justify-center">
    <CardTitle className="uppercase tracking-wider font-bold text-gray-700 text-[1rem]">Bag PhotoShoot</CardTitle>
    </CardContent>
    <CardFooter className="flex justify-center">
    
    </CardFooter>
  </Card>
  )
}

export default ProductCard
