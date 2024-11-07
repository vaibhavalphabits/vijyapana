"use client"  // For React 18 and Next.js

import React, { useEffect, useState } from 'react';
import SectionTitle from "@/components/SectionTitle";
import ProductContainer from './ProductContainer';
import Container from '../container';
import ProductDetails from "@/components/products/ProductDetails";
import { getProducts } from '@/lib/contentful';

// ShadCN Skeleton Component
import { Skeleton } from '@/components/ui/skeleton';

const Index = () => {
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [activeProduct,setActiveProduct]= useState("");
  useEffect(() => {
    const get = async () => {
      const result = await getProducts();
      setProducts(result);
    };
    get();
  }, []);

  if (products.length === 0) {
    return (
      <Container>
        {/* Section Title */}
        <SectionTitle text={"Classy Hampers"} />

        {/* Skeleton Loader for Product Container */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Loading Skeleton for each product */}
          <Skeleton className="h-[300px] w-full rounded-lg" />
          <Skeleton className="h-[300px] w-full rounded-lg" />
          <Skeleton className="h-[300px] w-full rounded-lg" />
        </div>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <SectionTitle text={"Classy Hampers"} />
        <ProductContainer setActiveProduct={setActiveProduct} products={products} setVisible={setVisible}/>
      </Container>
      <ProductDetails products={products} visible={visible} setVisible={setVisible}  activeProduct={activeProduct} setActiveProduct={setActiveProduct} />
    </>
  );
};

export default Index;
