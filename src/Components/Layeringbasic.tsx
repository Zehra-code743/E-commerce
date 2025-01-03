import Image from 'next/image';

export default function LayeringBasic() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      {/* Layering Basics Section */}
      <div className="relative flex-1 h-1/2 lg:h-full bg-purple-200">
        <Image
          src="/Section.png"
          alt="Layering Basics"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white p-6 sm:p-8 md:p-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">LAYERING BASICS</h2>
          <button className="mt-4 px-6 py-2 sm:px-8 sm:py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition duration-300">
            Discover
          </button>
        </div>
      </div>

      {/* Instagram-Style Feed Section */}
      <div className="relative flex-1 h-1/2 lg:h-full bg-gray-900">
        <Image
          src="/Section3.png"
          alt="Instagram Feed Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white p-6 sm:p-8 md:p-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">INSTAGRAM STYLE FEED</h2>
          <button className="mt-4 px-6 py-2 sm:px-8 sm:py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition duration-300">
            Explore Feed
          </button>
        </div>
      </div>
    </div>
  );
}
