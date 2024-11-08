
import Hero from "@/components/hero";
import ImageSlideShow from "@/components/ImageSlideShow";
import Imgtext from "@/components/Imgtext";
import Products from "@/components/products";
import Services from "@/components/services/index";
import Image from "next/image";
export default function Home() {
  return (<>
    
    <Hero/>
<Products/>
   <Imgtext text="creative solutions<br />for every Business needs."/>
    <Services/>
    <ImageSlideShow/>
    </>
  );
}
