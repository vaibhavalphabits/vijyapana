'use client';
import React, { useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import TalkToUsBTN from './TalkToUsBTN';
import { getHeroImages } from '@/lib/contentful';
import { Skeleton } from './ui/skeleton';
import Image from 'next/image';

function Hero() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function get() {
      const res = await getHeroImages();
      setImages(res[0].images);
    }
    get();
  }, []);

  if (images.length === 0) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-100">
        <Skeleton className="w-full h-full" />
      </div>
    );
  }

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="h-screen mt-[106px] md:mt-[64px] border"
    >
      <CarouselContent>
        {images.map((img, idx) => (
          <CarouselItem key={idx} className="relative h-screen w-full">
            <div className="absolute inset-0">
              <Image
                src={img}
                fill
                quality={100}
                className="object-cover object-center"
                alt="hero"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <TalkToUsBTN className={'absolute right-4 md:right-6 bottom-6 md:bottom-6'} />
    </Carousel>
  );
}

export default Hero;
