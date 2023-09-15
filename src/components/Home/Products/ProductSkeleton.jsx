const ProductSkeleton = () => {
  return (
    <>
      <div className="border relative border-gray-200 dark:border-gray-500 p-2 md:p-4 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-lg hover:shadow-2xl duration-300 md:h-96">
        <div className="h-36 md:h-48 lg:h-60 xl:h-72 w-full bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
        <div className="space-y-1 mt-3">
          <div className="bg-gray-200 dark:bg-gray-700 animate-pulse h-4 md:h-5 lg:h-6 xl:h-8 w-24 md:w-32 lg:w-40 xl:w-48 rounded"></div>
          <div className="bg-gray-200 dark:bg-gray-700 animate-pulse h-6 md:h-8 lg:h-10 xl:h-12 w-16 md:w-24 lg:w-32 xl:w-40 rounded"></div>
          <div className="bg-gray-200 dark:bg-gray-700 animate-pulse h-8 md:h-10 lg:h-12 xl:h-16 w-64 md:w-80 lg:w-96 xl:w-108 rounded"></div>
          <div className="bg-gray-200 dark:bg-gray-700 animate-pulse h-4 md:h-5 lg:h-6 xl:h-8 w-20 md:w-24 lg:w-32 xl:w-40 rounded"></div>
          <div className="bg-gray-200 dark:bg-gray-700 animate-pulse h-4 md:h-5 lg:h-6 xl:h-8 w-24 md:w-32 lg:w-40 xl:w-48 rounded"></div>
          <div className="bg-gray-200 dark:bg-gray-700 animate-pulse h-4 md:h-5 lg:h-6 xl:h-8 w-20 md:w-24 lg:w-32 xl:w-40 rounded"></div>
          <div className="bg-gray-200 dark:bg-gray-700 animate-pulse h-4 md:h-5 lg:h-6 xl:h-8 w-36 md:w-44 lg:w-52 xl:w-60 rounded"></div>
          <div className="absolute w-full bottom-4 left-0 px-2 md:px-4">
            <div className="flex items-center justify-between !mt-5">
              <div className="bg-gray-200 dark:bg-gray-700 animate-pulse h-10 w-20 md:w-24 lg:w-32 xl:w-40 rounded"></div>
              <div className="bg-gray-200 dark:bg-gray-700 animate-pulse h-10 w-20 md:w-24 lg:w-32 xl:w-40 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSkeleton;
