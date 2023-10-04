import Image from "next/image";
import React from "react";
import chairImage from "@/public/images/chair.png";

import { AiFillCaretLeft } from "react-icons/ai";

const data = [
  " انتشار در فهرست فرصت های شغلی بهین کار",
  " ارسال ایمیل به کارجویان مرتبط",
  " درج در شبکه های اجتماعی بهین کار",
];

function MoreInfoPart() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-20 max-w-6xl mx-auto ">
        <div className="">
          <p className="text-colorTitle font-bold text-xl md:text-2xl mb-16">
            آگهی های شغلی در کجا منتشر میشوند؟
          </p>
          <div className="h-full flex flex-col gap-16">
            {data.map((item, index) => (
              <Title data={item} key={index} />
            ))}
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <Image src={chairImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default MoreInfoPart;

function Title({ data }) {
  return (
    <>
      <div className="flex gap-4 pr-8 items-center mt-8 ">
        <AiFillCaretLeft size={25} color="#FFA702" />
        <p className="text-[#567EBF] font-bold text-base  md:text-xl">{data}</p>
      </div>
    </>
  );
}
