import Image from 'next/image';

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  ).then((res) => res.json());

  //? untill now it's SSG

  return (
    <div className="max-w-4xl mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="flex-shrink-0 md:w-1/2">
          <Image
            className="w-full h-64 object-cover"
            width={300}
            height={300}
            src={product.image}
            alt={product.title}
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 mt-4 md:mt-0 md:ml-6">
          {/* Title and Rating */}
          <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">⭐</span>
            <span className="ml-2 text-gray-600">
              {product.rating.rate} / 5
            </span>
            <span className="ml-4 text-gray-600">
              {product.rating.count} reviews
            </span>
          </div>

          {/* Price and Category */}
          <div className="mt-4">
            <p className="text-3xl font-semibold text-green-600">
              EGP {product.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 mt-1">{product.category}</p>
          </div>

          {/* Description */}
          <p className="text-gray-700 mt-4">{product.description}</p>

          {/* Add to Cart and Buy Now */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>

          {/* Shipping Info */}
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              <strong>Ships from:</strong> Amazon.eg | <strong>Sold by:</strong>{' '}
              Amazon.eg
            </p>
            <p className="text-sm text-red-600 mt-2">
              This item cannot be shipped to your selected delivery location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

// //? now it's ISR
// export const revalidate = 60; // Re-generate the page every 60 seconds

// //? now it's SSR
// export const dynamic = 'force-dynamic'; // Force SSR on this page
