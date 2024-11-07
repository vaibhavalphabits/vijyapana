import React from 'react'
import ProductCard from './ProductCard'
import {v4 as uuid} from "uuid"



function ProductContainer({products,setVisible,setActiveProduct}) {

  
  
  return (
    <section className='grid grid-cols-2 gap-3 gap-y-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8'>
        {products.map((product)=>{
          const {name,thumbnail,insideImages,pdfFile} = product
          return <ProductCard key={uuid()} setActiveProduct={setActiveProduct} name={name} thumbnail={thumbnail} insideImages={insideImages} pdfFile={pdfFile} setVisible={setVisible}/>
        })}
        
        
    </section>
  )
}

export default ProductContainer
