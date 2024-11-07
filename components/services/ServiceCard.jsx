'use client'

import { useState, useEffect ,useRef} from 'react'
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { getServices } from '@/lib/contentful'
import { Skeleton } from '../ui/skeleton'

// Sample data for the cards


const ImageSlideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images])

  return (
    <div className="relative w-full h-[200px]">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  )
}

const MarqueeCard = ({ title, images }) => {
  return (
    <Card className="w-[300px] mx-4 my-2 flex-shrink-0 shadow-sm">
      <CardContent className="p-0">
        <ImageSlideshow images={images} />
        <h3 className="text-md font-semibold p-4 text-center uppercase">{title}</h3>
      </CardContent>
    </Card>
  )
}

export default function MarqueeCards() {
  const [isPaused, setIsPaused] = useState(false)
  const [services,setServices] = useState([])
  
  useEffect(()=>{
    const get = async()=>{
      const res = await getServices()
      setServices(res);
    }
    get()
  },[])
  
  if (services.length==0) {
    return <div className='flex my-28'>{new Array(6).fill().map((_, index) => (
      <Card key={index} className="w-[300px] mx-4 my-2 flex-shrink-0">
        <CardContent className="p-0">
          <Skeleton className="w-full h-[200px]" />
          <Skeleton className="h-8 mt-4 mx-4" />
        </CardContent>
      </Card>))}</div>
  }

  return (
    <div 
      className="w-full my-24 overflow-hidden bg-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className={`flex animate-marquee`} //${isPaused ? '' : 'animate-marquee'}
        // style={{ animationPlayState: isPaused ? 'running' : 'running' }}
      >
        {services.map((card, index) => (
          <MarqueeCard key={`${card.id}-${index}`} title={card.name} images={card.images} />
        ))}
      </div>
    </div>
  )
}
