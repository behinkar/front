import React from "react";

function Features() {
  return (
    <>
      <div className="flex justify-center my-8 ">
        <p className="text-[#2C4875] font-bold text-xl">
          ویژگی های رزومه ساز بهین کار
        </p>
      </div>
      <div className="grid grid-cols-2 my-20 gap-20 text-[#2C4875]  font-bold max-w-4xl mx-auto">
        <div className=" flex flex-col gap-16">
          <span className="mr-auto w-40">امکان اشتراک گذاری</span>
          <p className="">طراحی حرفه ای و استاندارد</p>
          <p className="mr-auto w-40">ساخت سریع</p>
        </div>
        <div className="flex flex-col gap-16">
          <p className="">صرفه جویی در هزینه و زمان</p>
          <p className="mr-auto ">به روز رسانی همیشگی</p>
          <p className="">در دید کارفرمایان</p>
        </div>
      </div>
    </>
  );
}

export default Features;
