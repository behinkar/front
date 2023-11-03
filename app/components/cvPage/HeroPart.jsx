import Image from "next/image";
import React from "react";

function HeroPartCv() {
  return (
    <div className="grid md:grid-cols-[1fr_3fr] border my-4 border-blue-400 p-4 rounded-md overflow-hidden">
      <div className="relative h-64  flex justify-center items-center md:h-96 aspect-square">
        <Image
          className="rounded-md border-l-gray-300 border-l-2"
          src="/images/bgCv.png"
          alt="My Image"
          fill
        />
      </div>
      <div className="flex flex-col justify-between ">
        <p className="text-center text-colorTitle font-bold text-xl py-6">
          بزرگترین گام در فضای رقابتی استخدام، داشتن یک رزومه حرفه‌ای و جذاب
          است.
        </p>
        <div className="grow flex flex-col justify-center items-center">
          <p className="text-colorTitle text-base font-bold mb-6">
            ساخت رزومه استاندارد و حرفه ای با رزومه ساز بهین کار
          </p>

          <button className="inline-block  bg-bgBtn text-sm hover:scale-105 active:scale-95 text-gray-800 font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300">
            ساخت رزومه
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroPartCv;
