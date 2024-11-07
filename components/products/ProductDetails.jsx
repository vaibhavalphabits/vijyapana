import Image from "next/image"
import { v4 as uuidv4 } from 'uuid';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { randomUUID } from "crypto";

function ProductDetails({products,visible,setVisible,activeProduct,setActiveProduct}) {
  const product = products.find((cur)=>cur.name==activeProduct);
  const images = product?.insideImages;
  return (
    <section onClick={(e)=>{if (e.target.tagName=="SECTION") {
     return setVisible(false)}}} className={`bg-[rgb(0,0,0,0.3)] fixed inset-0 z-50 flex justify-center items-center ${visible?"block":"hidden"}`}>
      <main className='bg-white w-[80vw] h-[90vh] md:w-[50vw] md:h-[60vh] flex-col justify-center'>
        <div className="flex flex-col items-center justify-center h-full">

        <Carousel className="h-64 w-64">
  <CarouselContent>
    {images?.map((img)=>{
      return <CarouselItem key={uuidv4()}>
      <div className="w-64 h-64">
          <Image alt="product" width={200} height={200} src={img} className="w-full h-full"></Image>
      </div>
      </CarouselItem>
    })}
  </CarouselContent>
</Carousel>
        ...
            
        </div>
            
      </main>
    </section>
  )
}

export default ProductDetails
