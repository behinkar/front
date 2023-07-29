import React from "react";
import { LuClipboardList } from "react-icons/lu";
import { CiBookmarkCheck } from "react-icons/ci";
import { HiOutlineHome, HiOutlineLocationMarker } from "react-icons/hi";

function ResultPart() {
  return (
    <div className="flex gap-5 flex-col justify-center m-4 border border-colorTitle p-6">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((el, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}

export default ResultPart;

function Card() {
  return (
    <div className="p-4 py-6 flex justify-between border rounded-md border-blue-400">
      <div className="flex items-center gap-5">
        <div className="w-24 h-24 bg-blue-400 rounded-md"></div>
        <div className="text-gray-800 flex flex-col gap-4">
          <p className="">عنوان شغلی</p>
          <div className="flex items-center gap-4">
            <HiOutlineHome
              size={25}
              className=" cursor-pointer hover:scale-105"
              color=""
            />
            <span className="">اسم شرکت</span>
          </div>
          <div className="flex items-center gap-4">
            <HiOutlineLocationMarker
              size={25}
              className=" cursor-pointer hover:scale-105"
              color=""
            />
            استان
          </div>
          <div className="flex items-center gap-4">
            <LuClipboardList
              size={25}
              className=" cursor-pointer hover:scale-105"
              color=""
            />
            <span className="">نوع قرارداد ونوع حضور</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="self-end">
          <CiBookmarkCheck
            size={30}
            className=" cursor-pointer hover:scale-105"
            color=""
          />
        </div>
        <div className="">
          <button className="inline-block  bg-bgBtn text-sm hover:scale-105 active:scale-95 text-gray-800 font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300">
            ارسال رزومه
          </button>
        </div>
      </div>
    </div>
  );
}
