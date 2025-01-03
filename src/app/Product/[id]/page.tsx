'use client';

import { useRouter } from 'next/router';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Replace this with real data fetching logic (Sanity, API, etc.)
  const products = [
    { id: '1', name: "Glacierwind Caps", price: "$70", image: "/Product6.png", description: "A warm and cozy cap for the winter season." },
    { id: '2', name: "Olympian Parkas", price: "$150", image: "/image2.png", description: "A stylish winter parka to keep you warm." },
    { id: '3', name: "Frostguard Jackets", price: "$200", image: "/image3.png", description: "A high-quality jacket for extreme cold." },
    { id: '4', name: "Stormvision Hats", price: "$90", image: "/image4.png", description: "A perfect hat for stormy weather." },
    { id: '5', name: "Blizzardwave Wraps", price: "$120", image: "/image5.png", description: "A cozy wrap for the cold winter days." },
    { id: '6', name: "Gloves", price: "$120", image: "/image6.png", description: "Warm and soft gloves for winter activities." },
  ];

  // Find the product that matches the URL id
  const product = products.find((product) => product.id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-80 h-80 object-cover rounded-lg"
        />
        <h2 className="mt-6 text-3xl font-semibold">{product.name}</h2>
        <p className="text-xl text-gray-700">{product.price}</p>
        <p className="mt-4 text-gray-600">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
