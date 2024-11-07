'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInterval } from 'react-use'
import { getSlideShowImages } from '@/lib/contentful'
import { Skeleton } from '@/components/ui/skeleton'  // Import the Skeleton component

// Updated Slideshow component that takes images as a prop
const Slideshow = ({ images }) => {
  const [index, setIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState((index + 1) % images.length)

  // Preload the next image
  useEffect(() => {
    const preloadImage = new Image()
    preloadImage.src = images[nextImageIndex]
  }, [nextImageIndex, images])

  // Cycle through images every 5 seconds
  useInterval(() => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length
      setNextImageIndex((newIndex + 1) % images.length)  // Set the next image index
      return newIndex
    })
  }, 5000)

  return (
    <div className="relative mt-12 w-full h-[570px] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt={`Slideshow image ${index + 1}`}
          className="absolute top-0 left-0 w-full h-full object-top object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  )
}

// Wrap the Slideshow component in Suspense
const SuspenseSlideshow = ({ images }) => {
  return (
    <Suspense fallback={<Skeleton className="w-full h-[570px]" />}>
      <Slideshow images={images} />
    </Suspense>
  )
}

export default function Component() {
  const [images1, setImages1] = useState([])
  const [images2, setImages2] = useState([])
  const [heading1,setHeading1]= useState("");
  const [heading2,setHeading2]= useState("");
  const [subheading1,setsubHeading1]= useState("");
  const [subheading2,setsubHeading2]= useState("");
  // Fetch images on component mount
  useEffect(() => {
    const fetchImages = async () => {
      const { image1, image2,heading1,heading2,subheading1,subheading2 } = await getSlideShowImages()
      setImages1(image1)
      setImages2(image2)
      setHeading1(heading1)
      setHeading2(heading2)
      setsubHeading1(subheading1)
      setsubHeading2(subheading2)
    }

    fetchImages()
  }, [])

  if (!images1.length || !images2.length) {
    
    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-w-3 aspect-h-2">
            <Skeleton className="w-full h-[570px]" />
          </div>
          <div className="aspect-w-3 aspect-h-2">
            <Skeleton className="w-full h-[570px]" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="aspect-w-3 aspect-h-2">
          <SuspenseSlideshow images={images1} />
          <div className='flex items-center flex-col'>
            <h1 className='font-semibold text-md mt-4 tracking-tighter'>{heading1}</h1>
            <p className='text-gray-500 text-xs mt-0'>{subheading1}</p>
          </div>
        </div>
        <div className="aspect-w-3 aspect-h-2">
          <SuspenseSlideshow images={images2} />
          <div className='flex items-center flex-col'>
            <h1 className='font-semibold text-md mt-4 tracking-tighter'>{heading2}</h1>
            <p className='text-gray-500 text-xs mt-0'>{subheading2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
