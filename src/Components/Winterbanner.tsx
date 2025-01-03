import Image from "next/image";

const WinterBanner = () => {
  return (
    <div
      className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] bg-cover bg-center"
      style={{ backgroundImage: "url('/winter-background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 drop-shadow-lg">
          Winter Collection 2024
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 drop-shadow-lg">
          Stay Warm. Stay Stylish. Explore Our New Winter Apparel.
        </p>
        <a
          href="#explore"
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105"
        >
          Explore the Collection
        </a>
      </div>
    </div>
  );
};

export default WinterBanner;
