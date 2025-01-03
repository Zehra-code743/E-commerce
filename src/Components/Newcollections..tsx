import React from "react";

const NewCollections = () => {
  return (
    <div className="border-2 border-blue-500 rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-black">
        NEW COLLECTIONS
      </h2>
      <p className="text-center text-gray-600 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        Browse through our curated selection of coats, knitwear, boots, and more to ensure
        you’re ready for whatever winter throws your way.
      </p>
    </div>
  );
};

export default NewCollections;
