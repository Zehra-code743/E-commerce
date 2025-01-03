import React from "react";

const CategorySection = () => {
  const categories = [
    {
      title: "MEN",
      image: "/Section1.png", // Replace with your actual image path
      link: "#",
    },
    {
      title: "NEW COLLECTION",
      image: "/Section4.png", // Replace with your actual image path
      link: "#",
    },
    {
      title: "WOMEN",
      image: "/Section2.png", // Replace with your actual image path
      link: "#",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto py-10 px-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{category.title}</h3>
            <a
              href={category.link}
              className="mt-4 px-6 py-2 bg-white text-black text-sm sm:text-base font-semibold rounded-lg flex items-center gap-2 hover:bg-gray-200 transition"
            >
              Discover <span>→</span>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategorySection;
