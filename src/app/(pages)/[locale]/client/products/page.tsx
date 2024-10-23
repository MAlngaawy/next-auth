'use client';

import ProductCard from '@/app/Components/ProductsCard';
import { Product } from '@/app/types/general';
import { SessionProvider } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const productsData = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
};

const Products = () => {
  const [data, setData] = useState<Product[]>([]);
  const t = useTranslations('HomePage');

  useEffect(() => {
    productsData().then((res) => setData(res));
  }, []);

  return (
    <SessionProvider>
      <h1 className="text-4xl">{t('forTest')}</h1>
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
