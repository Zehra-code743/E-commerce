import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;          // Unique identifier for the product
  name: string;         // Name of the product
  price: number;        // Price of the product
  imageUrl: string;     // URL of the product image
  description: string;  // Description of the product
  slug: string;         // Slug for the product (used for routing)
}

const BestSellers = async () => {
  const products: Product[] = await client.fetch(
    `*[_type == "product"]{
       _id,
       name,
       price,
       "imageUrl": image.asset->url,
       description,
       "slug": slug.current // Extract slug as a string
     }`
  );

  
  return (
  
  <div className="py-8 px-4 bg-gray-100">
      <h2 className="text-center text-2xl font-bold mb-6">BEST SELLERS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <div className="w-32 h-32 relative mb-4">
              <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-center font-semibold text-lg">{product.name}</h3>
            <p className="text-center text-gray-600">${product.price}</p>
            <Link href={`/product/${product.slug}`}>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
