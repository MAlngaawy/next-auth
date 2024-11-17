import AddProductsForm from '@/app/Components/AddProductsForm';
import ProductCard from '@/app/Components/ProductsCard';
import { Product } from '@/app/types/general';
import { getTranslations } from 'next-intl/server';

const Serverpage = async () => {
  const data = await fetch('https://fakestoreapi.com/products').then((res) =>
    res.json()
  );

  const t = await getTranslations('HomePage');

  return (
    <div className="mx-5 flex flex-col gap-10 my-10">
      <AddProductsForm />
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
    </div>
  );
};

export default Serverpage;
