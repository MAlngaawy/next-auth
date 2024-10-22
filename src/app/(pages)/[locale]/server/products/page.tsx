import AddProductsForm from '@/app/Components/AddProductsForm';
import ProductCard from '@/app/Components/ProductsCard';
import { Product } from '@/app/types/general';

const Serverpage = async () => {
  const data = await fetch('https://fakestoreapi.com/products', {
    next: {
      tags: ['products'],
    },
  }).then((res) => res.json());

  return (
    <div className="mx-5 flex flex-col gap-10 my-10">
      <AddProductsForm />
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
