import Image from "next/image";
import React from "react";
import chairImage from "@/public/images/chair.png";

function MoreInfoPart() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 my-20 max-w-6xl mx-auto ">
        <div className="">
          <p className="text-colorTitle font-bold text-2xl">
            آگهی های شغلی در کجا منتشر میشوند؟
          </p>
          <div className="h-full flex flex-col gap-16">
            <p className="text-[#567EBF] font-bold pr-8 text-xl mt-24">
              انتشار در فهرست فرصت های شغلی بهین کار
            </p>
            <p className="text-[#567EBF] font-bold pr-8 mt-8 text-xl">
              ارسال ایمیل به کارجویان مرتبط
            </p>
            <p className="text-[#567EBF] font-bold pr-8 mt-8 text-xl">
              درج در شبکه های اجتماعی بهین کار
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={chairImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default MoreInfoPart;
