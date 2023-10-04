import React from "react";

import { HiOutlineClock } from "react-icons/hi";
import { TiUser } from "react-icons/ti";
function CardCourse() {
  return (
    <div className="p-4 py-6 flex justify-between border rounded-md border-blue-400">
      <div className="flex items-center gap-5">
        <div className="hidden md:block md:w-24 md:h-24 bg-blue-400 rounded-md"></div>
        <div className="text-gray-800 flex flex-col gap-4">
          <p className="">عنوان دوره</p>
          <div className="flex items-center gap-4">
            <HiOutlineClock
              size={25}
              className=" cursor-pointer hover:scale-105"
              color=""
            />
            <span className=""> مدت زمان</span>
          </div>
          <div className="flex items-center gap-4">
            <TiUser
              size={30}
              className=" cursor-pointer hover:scale-105"
              color=""
            />
            مدرس
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button className="inline-block  bg-bgBtn text-sm hover:scale-105 active:scale-95 text-gray-800 font-bold py-3 md:px-8 px-3 rounded-full focus:outline-none focus:shadow-outline transition duration-300">
          مشاهده دوره
        </button>
      </div>
    </div>
  );
}

export default CardCourse;
