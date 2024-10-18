import React from 'react';
import { Product } from '../types/general';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white h-full flex flex-col gap-2 justify-between">
      <Image
        className="w-full h-64 object-cover"
        width={300}
        height={300}
        src={product.image}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p className="text-lg font-semibold mt-4">${product.price}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product.category}
        </span>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">⭐</span>
          <span className="ml-2 text-gray-600">{product.rating.rate} / 5</span>
          <span className="ml-4 text-gray-600">
            {product.rating.count} reviews
          </span>
        </div>
      </div>
      <Link href={`products/${product.id}`} className="bg-black p-4 text-white">
        Details
      </Link>
    </div>
  );
};

export default ProductCard;
