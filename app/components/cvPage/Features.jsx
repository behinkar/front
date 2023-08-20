import React from "react";

function Features() {
  return (
    <>
      <div className="flex justify-center my-8 ">
        <p className="text-[#2C4875] font-bold text-xl">
          ویژگی های رزومه ساز بهین کار
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6  font-bold">
        <div className="">
          <span className="mr-auto">امکان اشتراک گذاری</span>
          <p className="">طراحی حرفه ای و استاندارد</p>
          <p className="">ساخت سریع</p>
        </div>
        <div className="">
          <p className="">صرفه جویی در هزینه و زمان</p>
          <p className="">به روز رسانی همیشگی</p>
          <p className="">در دید کارفرمایان</p>
        </div>
      </div>
    </>
  );
}

export default Features;
