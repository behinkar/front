import React from "react";
import { FiClock, FiRefreshCw } from "react-icons/fi";
import { FaShareAlt, FaMedal } from "react-icons/fa";
import { BiHourglass } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";

function Features() {
  return (
    <>
      <div className="flex justify-center my-8 ">
        <p className="text-[#2C4875] font-bold text-xl">
          ویژگی های رزومه ساز بهین کار
        </p>
      </div>
      <div className="grid grid-cols-2 my-20 gap-20 text-[#2C4875]  font-bold max-w-3xl mx-auto">
        <div className=" flex flex-col gap-16">
          <div className="mr-auto w-52 flex items-center ">
            <FaShareAlt className="ml-2" size={35} />

            <span className=""> امکان اشتراک گذاری</span>
          </div>

          <p className="flex items-center">
            <span className="ml-2">
              <FaMedal size={35} />
            </span>
            <span>طراحی حرفه ای و استاندارد</span>
          </p>
          <div className="mr-auto w-52 flex items-center">
            <BiHourglass className="ml-2" size={35} />
            ساخت سریع
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <p className="flex items-center">
            <span className="ml-2">
              <FiClock size={35} />
            </span>
            <span>صرفه جویی در هزینه و زمان</span>
          </p>
          <p className="mr-auto flex items-center ">
            <FiRefreshCw className="ml-2" size={35} />
            <span>به روز رسانی همیشگی</span>
          </p>
          <div className="flex items-center">
            <span className="ml-2">
              <BsFillPeopleFill size={35} />
            </span>

            <span>در دید کارفرمایان</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
