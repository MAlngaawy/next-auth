'use client';

import ProductCard from '@/app/Components/ProductsCard';
import { Product } from '@/app/types/general';
import { useEffect, useState } from 'react';

const productsData = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
};

const Products = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    productsData().then((res) => setData(res));
  }, []);

  return (
    <div className="flex items-stretch items-center justify-content-center gap-4 flex-wrap bg-white">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <ProductCard product={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
