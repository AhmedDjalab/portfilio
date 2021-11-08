export default function customeError() {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden bg-white dark:bg-gray-900 ">
      <div className="">
        <div className="mb-2 text-xl font-bold justify-center flex flex-col ">
          <p className="text-semiBold text-5xl text-black dark:text-white mx-auto">
            Error (:
          </p>
          <p className="text-semiBold text-xl text-gray-600 mt-10 dark:text-white">
            we wroking hard to fix it , Please try again
          </p>
        </div>
      </div>
    </div>
  );
}
