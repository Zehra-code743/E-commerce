import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-800">
      {/* Background Image */}
      <Image
        src="/Hero.png" // Replace with the correct path or URL
        alt="Winter Fashion"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          STAY WARM, LOOK COOL
        </h1>
        <button className="mt-6 px-8 py-4 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-lg transition">
          Discover
        </button>
      </div>
    </div>
  );
}
