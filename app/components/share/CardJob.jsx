import React from "react";

function CardJob() {
  return (
    <div className="p-2 md:p-4 py-6 flex justify-between border rounded-md border-blue-400">
      <div className="flex items-center gap-5">
        <div className="w-24 h-24 bg-blue-400 rounded-md"></div>
        <div className="text-gray-800 flex flex-col justify-between  gap-20">
          <span className=""> عنوان شغلی</span>

          <span className="">آخرین وضعیت</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button className="inline-block  bg-bgBtn text-sm hover:scale-105 active:scale-95 text-gray-800 md:font-bold py-3 md:px-8 px-3 rounded-full focus:outline-none focus:shadow-outline transition duration-300">
          جزییات درخواست
        </button>
      </div>
    </div>
  );
}

export default CardJob;
