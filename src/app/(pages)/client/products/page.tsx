'use client';

import ClientComponent from '@/app/Components/ClientComponent';
import ProductCard from '@/app/Components/ProductsCard';
import { Product } from '@/app/types/general';
import { SessionProvider } from 'next-auth/react';
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
    <SessionProvider>
      <ClientComponent />
      <div className="flex items-stretch justify-content-center gap-4 flex-wrap bg-white">
        {data.map((item: Product) => {
          return (
            <div key={item.id}>
              <ProductCard product={item} />
            </div>
          );
        })}
      </div>
    </SessionProvider>
  );
};

export default Products;
