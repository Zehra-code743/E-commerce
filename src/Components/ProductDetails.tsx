// // "use client";
// // import { client } from "@/sanity/lib/client";
// // import Image from "next/image";
// // import React, { useEffect, useState } from "react";
// // import { Montserrat } from "next/font/google";
// // import { CiHeart } from "react-icons/ci";
// // import { FaEye, FaStar } from "react-icons/fa";
// // import { IoCartOutline } from "react-icons/io5";

// // const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

// // interface IProducts {
// //   id: string;
// //   name: string;
// //   description: string;
// //   price: number;
// //   imageUrl: string;
// //   slug: {
// //     current: string;
// //   };
// // }

// // const ProductDetails = ({ productId }: { productId: string }) => {
// //   const [result, setResult] = useState<IProducts | null>(null);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [selectedColor, setSelectedColor] = useState<string>("blue");
// //   const [cart, setCart] = useState<any[]>([]);
// //   const [color, setColor] = useState<string>("blue");

// //   const colors = [
// //     { name: "blue", class: "bg-blue-500", hex: "#3b82f6" },
// //     { name: "green", class: "bg-green-500", hex: "#22c55e" },
// //     { name: "orange", class: "bg-orange-500", hex: "#f97316" },
// //     { name: "dark", class: "bg-gray-800", hex: "#1f2937" },
// //   ];

// //   useEffect(() => {
// //     const fetchProductDetails = async () => {
// //       setLoading(true);
// //       try {
// //         const product = await client.fetch(
// //           `*[_type == "product" && slug.current == $slug][0]{
// //             _id,
// //             name,
// //             price,
// //             "imageUrl": image.asset->url,
// //             description,
// //             "slug": slug.current
// //           }`,
// //           { slug: productId }
// //         );
// //         setResult(product || null);
// //       } catch (error) {
// //         console.error("Error fetching product details:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProductDetails();
// //   }, [productId]);

// //   const isProductInCart = () => {
// //     return cart.some((item) => item.id === result?.id && item.color === selectedColor);
// //   };

// //   const changeColor = () => {
// //     setColor((prev) => (prev + "green"? prev + "orange":prev + "dark"  ) % colors.length)
// //   };
// //   const handleCartToggle = () => {
// //     if (result) {
// //       if (isProductInCart()) {
// //         setCart((prevCart) =>
// //           prevCart.filter((item) => !(item.id === result.id && item.color === selectedColor))
// //         );
// //       } else {
// //         const newItem = {
// //           id: result.id,
// //           name: result.name,
// //           price: result.price,
// //           color: selectedColor,
// //           imageUrl: result.imageUrl,
// //         };
// //         setCart((prevCart) => [...prevCart, newItem]);
// //       }
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center min-h-screen">
// //         <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// //       </div>
// //     );
// //   }

// //   if (!result) {
// //     return <p className="text-center text-3xl font-semibold text-gray-800">Product not found</p>;
// //   }

// //   return (
// //     <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-lg">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //         <div className="flex justify-center items-center border rounded-lg overflow-hidden">
// //           <Image
// //             src={result.imageUrl}
// //             alt={result.name}
// //             width={500}
// //             height={500}
// //             className="object-cover w-full h-full transform transition duration-300 hover:scale-105"
// //           />
// //         </div>

// //         <div className="space-y-6">
// //           <h1 className="text-3xl font-bold text-gray-800">{result.name}</h1>
// //           <p className="text-gray-600">{result.description}</p>
// //           <div className="flex items-center space-x-2">
// //             {[...Array(4)].map((_, index) => (
// //               <FaStar key={index} className="text-yellow-400" />
// //             ))}
// //             <FaStar className="text-gray-300" />
// //             <span className="text-gray-500">(10 Reviews)</span>
// //           </div>
// //           <p className="text-2xl font-bold text-green-600">${result.price}</p>

// //           <div className="flex items-center space-x-4">
// //             <span className="text-gray-600">Select Color:</span>
// //             {colors.map((color) => (
// //               <button
// //                 key={color.name}
// //                 className={`w-8 h-8 rounded-full border-2 transition transform hover:scale-110 ${
// //                   selectedColor === color.name ? "border-black" : "border-gray-300"
// //                 } ${color.class}`}
// //                 onClick={() => setColor(color.name)}
// //               ></button>
// //             ))}
// //           </div>

// //           <div className="flex space-x-4">
// //             <button
// //               onClick={handleCartToggle}
// //               className={`px-6 py-3 text-white font-semibold rounded transition w-full md:w-auto ${
// //                 isProductInCart() ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
// //               }`}
// //             >
// //               {isProductInCart() ? "Remove from Cart" : "Add to Cart"}
// //             </button>

// //             <button className="p-3 border rounded-full hover:bg-gray-200">
// //               <CiHeart className="text-gray-600" />
// //             </button>

// //             <button className="p-3 border rounded-full hover:bg-gray-200">
// //               <IoCartOutline className="text-gray-600" />
// //             </button>

// //             <button className="p-3 border rounded-full hover:bg-gray-200">
// //               <FaEye className="text-gray-600" />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetails;













// // {/* <p className='text-gray-400'>Select Colors</p>
// // <div className='space-x-3'>
// //   {
// //    items.color.map((item:any,i:any)=>{
// //        return <button key={i} onClick={()=>setcartItem({...cartItem,color:item})} className='w-[37px] active:outline h-[37px] rounded-full ' style={{backgroundColor:item}}></button>
// //    })
// //   } */}









// // "use client";
// // import { client } from "@/sanity/lib/client";
// // import Image from "next/image";
// // import React, { useEffect, useState } from "react";
// // import { Montserrat } from "next/font/google";
// // import { CiHeart } from "react-icons/ci";
// // import { FaEye, FaStar } from "react-icons/fa";
// // import { IoCartOutline } from "react-icons/io5";

// // const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

// // interface IProducts {
// //   id: string;
// //   name: string;
// //   description: string;
// //   price: number;
// //   imageUrl: string;
// //   slug: {
// //     current: string;
// //   };
// // }

// // const ProductDetails = ({ productId }: { productId: string }) => {
// //   const [result, setResult] = useState<IProducts | null>(null);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [selectedColor, setSelectedColor] = useState<string>("blue");
// //   const [cart, setCart] = useState<any[]>([]);

// //   const colors = [
// //     { name: "blue", class: "bg-blue-500", hex: "#3b82f6" },
// //     { name: "green", class: "bg-green-500", hex: "#22c55e" },
// //     { name: "orange", class: "bg-orange-500", hex: "#f97316" },
// //     { name: "dark", class: "bg-gray-800", hex: "#1f2937" },
// //   ];

// //   useEffect(() => {
// //     const fetchProductDetails = async () => {
// //       setLoading(true);
// //       try {
// //         const product = await client.fetch(
// //           `*[_type == "product" && slug.current == $slug][0]{
// //             _id,
// //             name,
// //             price,
// //             "imageUrl": image.asset->url,
// //             description,
// //             "slug": slug.current
// //           }`,
// //           { slug: productId }
// //         );
// //         setResult(product || null);
// //       } catch (error) {
// //         console.error("Error fetching product details:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProductDetails();
// //   }, [productId]);

// //   const isProductInCart = () => {
// //     return cart.some((item) => item.id === result?.id && item.color === selectedColor);
// //   };

// //   const handleCartToggle = () => {
// //     if (result) {
// //       if (isProductInCart()) {
// //         setCart((prevCart) =>
// //           prevCart.filter((item) => !(item.id === result.id && item.color === selectedColor))
// //         );
// //       } else {
// //         const newItem = {
// //           id: result.id,
// //           name: result.name,
// //           price: result.price,
// //           color: selectedColor,
// //           imageUrl: result.imageUrl,
// //         };
// //         setCart((prevCart) => [...prevCart, newItem]);
// //       }
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center min-h-screen">
// //         <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// //       </div>
// //     );
// //   }

// //   if (!result) {
// //     return <p className="text-center text-3xl font-semibold text-gray-800">Product not found</p>;
// //   }

// //   return (
// //     <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-lg">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //         <div className="flex justify-center items-center border rounded-lg overflow-hidden">
// //           <Image
// //             src={result.imageUrl}
// //             alt={result.name}
// //             width={500}
// //             height={500}
// //             className="object-cover w-full h-full transform transition duration-300 hover:scale-105"
// //           />
// //         </div>

// //         <div className="space-y-6">
// //           <h1 className="text-3xl font-bold text-gray-800">{result.name}</h1>
// //           <p className="text-gray-600">{result.description}</p>
// //           <div className="flex items-center space-x-2">
// //             {[...Array(4)].map((_, index) => (
// //               <FaStar key={index} className="text-yellow-400" />
// //             ))}
// //             <FaStar className="text-gray-300" />
// //             <span className="text-gray-500">(10 Reviews)</span>
// //           </div>
// //           <p className="text-2xl font-bold text-green-600">${result.price}</p>

// //           <div className="flex items-center space-x-4">
// //             <span className="text-gray-600">Select Color:</span>
// //             {colors.map((color) => (
// //               <button
// //                 key={color.name}
// //                 className={`w-8 h-8 rounded-full border-2 transition transform hover:scale-110 ${
// //                   selectedColor === color.name ? "border-black" : "border-gray-300"
// //                 } ${color.class}`}
// //                 onClick={() => setSelectedColor(color.name)}
// //               ></button>
// //             ))}
// //           </div>

// //           <div className="flex space-x-4">
// //             <button
// //               onClick={handleCartToggle}
// //               className={`px-6 py-3 text-white font-semibold rounded transition w-full md:w-auto ${
// //                 isProductInCart() ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
// //               }`}
// //             >
// //               {isProductInCart() ? "Remove from Cart" : "Add to Cart"}
// //             </button>

// //             <button className="p-3 border rounded-full hover:bg-gray-200">
// //               <CiHeart className="text-gray-600" />
// //             </button>

// //             <button className="p-3 border rounded-full hover:bg-gray-200">
// //               <IoCartOutline className="text-gray-600" />
// //             </button>

// //             <button className="p-3 border rounded-full hover:bg-gray-200">
// //               <FaEye className="text-gray-600" />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetails;




// "use client";
// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { Montserrat } from "next/font/google";
// import { CiHeart } from "react-icons/ci";
// import { FaEye, FaStar } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";

// const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

// interface IProducts {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
//   slug: {
//     current: string;
//   };
// }

// const ProductDetails = ({ productId }: { productId: string }) => {
//   const [result, setResult] = useState<IProducts | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [selectedColor, setSelectedColor] = useState<string>("blue");
//   const [cart, setCart] = useState<any[]>([]);
  

//   const colors = [
//     { name: "blue", class: "bg-blue-500", hex: "#3b82f6" },
//     { name: "green", class: "bg-green-500", hex: "#22c55e" },
//     { name: "orange", class: "bg-orange-500", hex: "#f97316" },
//     { name: "dark", class: "bg-gray-800", hex: "#1f2937" },
//   ];

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       setLoading(true);
//       try {
//         const product = await client.fetch(
//           `*[_type == "product" && slug.current == $slug][0]{
//             _id,
//             name,
//             price,
//             "imageUrl": image.asset->url,
//             description,
//             "slug": slug.current
//           }`,
//           { slug: productId }
//         );
//         setResult(product || null);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [productId]);

//   const isProductInCart = () => {
//     return cart.some((item) => item.id === result?.id && item.color === selectedColor);
//   };

//   const handleCartToggle = () => {
//     if (result) {
//       if (isProductInCart()) {
//         setCart((prevCart) =>
//           prevCart.filter((item) => !(item.id === result.id && item.color === selectedColor))
//         );
//       } else {
//         const newItem = {
//           id: result.id,
//           name: result.name,
//           price: result.price,
//           color: selectedColor,
//           imageUrl: result.imageUrl,
//         };
//         setCart((prevCart) => [...prevCart, newItem]);
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   if (!result) {
//     return <p className="text-center text-3xl font-semibold text-gray-800">Product not found</p>;
//   }

//   return (
//     <div className={`max-w-6xl mx-auto p-8 rounded-lg shadow-lg transition-colors duration-300`} style={{ backgroundColor: colors.find(c => c.name === selectedColor)?.hex || "white" }}>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="flex justify-center items-center border rounded-lg overflow-hidden">
//           <Image
//             src={result.imageUrl}
//             alt={result.name}
//             width={500}
//             height={500}
//             className="object-cover w-full h-full transform transition duration-300 hover:scale-105"
//           />
//         </div>

//         <div className="space-y-6">
//           <h1 className="text-3xl font-bold text-gray-800 shadow-lg rounded-lg shadow-white">{result.name}</h1>
//           <p className="text-gray-600 shadow-md rounded-sm shadow-white">{result.description}</p>
//           <div className="flex items-center space-x-2">
//             {[...Array(4)].map((_, index) => (
//               <FaStar key={index} className="text-yellow-400" />
//             ))}
//             <FaStar className="text-gray-300" />
//             <span className="text-gray-500">(10 Reviews)</span>
//           </div>
//           <p className="text-2xl font-bold text-green-600">${result.price}</p>

//           <div className="flex items-center space-x-4">
//             <span className="text-gray-600">Select Color:</span>
//             {colors.map((color) => (
//               <button
//                 key={color.name}
//                 className={`w-8 h-8 rounded-full border-2 transition transform hover:scale-110 ${
//                   selectedColor === color.name ? "border-black" : "border-gray-300"
//                 } ${color.class}`}
//                 onClick={() => setSelectedColor(color.name)}
//               ></button>
//             ))}
//           </div>

//           <div className="flex space-x-4">
//             <button
//               onClick={handleCartToggle}
//               className={`px-6 py-3 text-white font-semibold rounded transition w-full md:w-auto ${
//                 isProductInCart() ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-950"
//               }`}
//             >
//               {isProductInCart() ? "Remove from Cart" : "Add to Cart"}
//             </button>

//             <button className="p-3 border rounded-full hover:bg-gray-200">
//               <CiHeart className="text-gray-600" />
//             </button>

//             <button className="p-3 border rounded-full hover:bg-gray-200">
//               <IoCartOutline className="text-gray-600" />
//             </button>

//             <button className="p-3 border rounded-full hover:bg-gray-200">
//               <FaEye className="text-gray-600" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;






"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import { CiHeart } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

interface IProducts {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  slug: {
    current: string;
  };
}

const ProductDetails = ({ productId }: { productId: string }) => {
  const [result, setResult] = useState<IProducts | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedColor, setSelectedColor] = useState<string>("blue");
  const [cart, setCart] = useState<any[]>([]);

  const colors = [
    { name: "blue", class: "bg-blue-500", hex: "#3b82f6" },
    { name: "green", class: "bg-green-500", hex: "#22c55e" },
    { name: "orange", class: "bg-orange-500", hex: "#f97316" },
    { name: "dark", class: "bg-gray-800", hex: "#1f2937" },
  ];

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const product = await client.fetch(
          `*[_type == "product" && slug.current == $slug][0]{
            _id,
            name,
            price,
            "imageUrl": image.asset->url,
            description,
            "slug": slug.current
          }`,
          { slug: productId }
        );
        setResult(product || null);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [productId]);

  const isProductInCart = () => {
    return cart.some((item) => item.id === result?.id && item.color === selectedColor);
  };

  const handleCartToggle = () => {
    if (result) {
      if (isProductInCart()) {
        setCart((prevCart) =>
          prevCart.filter((item) => !(item.id === result.id && item.color === selectedColor))
        );
      } else {
        const newItem = {
          id: result.id,
          name: result.name,
          price: result.price,
          color: selectedColor,
          imageUrl: result.imageUrl,
        };
        setCart((prevCart) => [...prevCart, newItem]);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!result) {
    return <p className="text-center text-3xl font-semibold text-gray-800">Product not found</p>;
  }

  return (
    <div className={`max-w-6xl mx-auto p-8 rounded-lg shadow-lg transition-colors duration-300`} style={{ backgroundColor: colors.find(c => c.name === selectedColor)?.hex || "white" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center border rounded-lg overflow-hidden">
          <Image src={result.imageUrl} alt={result.name} width={500} height={500} className="object-cover w-full h-full transform transition duration-300 hover:scale-105" />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{result.name}</h1>
          <p className="text-gray-600">{result.description}</p>
          <p className="text-2xl font-bold text-green-600">${result.price}</p>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Select Color:</span>
            {colors.map((color) => (
              <button key={color.name} className={`w-8 h-8 rounded-full border-2 transition transform hover:scale-110 ${selectedColor === color.name ? "border-black" : "border-gray-300"} ${color.class}`} onClick={() => setSelectedColor(color.name)}></button>
            ))}
          </div>

          <button onClick={handleCartToggle} className={`px-6 py-3 text-white font-semibold rounded transition w-full md:w-auto ${isProductInCart() ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"}`}>
            {isProductInCart() ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default ProductDetails;
