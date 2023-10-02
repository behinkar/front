import React from "react";

function AdsBanners() {
  return (
    <div className=" block  md:flex justify-center gap-4 max-w-5xl mx-auto">
      <Banner
        imgUrl="/images/bgResume.jpeg"
        btnTitle="ساخت رزومه"
        texts={["رزومه نداری؟!"]}
      />
      <Banner
        ExtraClass="bg-[#E7EFFC]"
        imgUrl="/images/bgLearn.jpeg"
        btnTitle="شروع آموزش"
        texts={["حرفه ای وارد شو!!"]}
      />
    </div>
  );
}

export default AdsBanners;

// inner componnet

function Banner({ btnTitle, texts, imgUrl, ExtraClass }) {
  return (
    <>
      <div
        class={`${
          ExtraClass ?? ""
        }  h-80 bg-contain bg-no-repeat bg-center rounded-lg flex flex-col justify-between p-4 shadow-md grow text-gray-700  my-4`}
        style={{ backgroundImage: `url('${imgUrl}')` }}
      >
        <div className="flex justify-between items-center my-4">
          {texts.map((text, index) => (
            <p className=" text-xl " key={index}>
              {text}
            </p>
          ))}
          <button className="inline-block  bg-bgBtn text-sm hover:scale-105 active:scale-95 text-gray-800 font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300">
            {btnTitle}
          </button>
        </div>
      </div>
    </>
  );
}
