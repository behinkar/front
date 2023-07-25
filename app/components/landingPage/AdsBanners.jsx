import React from "react";

function AdsBanners() {
  return (
    <div className="flex justify-center gap-4 max-w-5xl mx-auto">
      <Banner  btnTitle='ساخت رزومه' texts={['رزومه نداری؟!']}/>
      <Banner  btnTitle='شروع آموزش'  texts={['حرفه ای وارد شو!!']}/>
    </div>
  );
}

export default AdsBanners;

// inner componnet

function Banner({btnTitle,texts}) {
  return (
    <>
      <div class="rounded-lg flex flex-col justify-between p-4 shadow-md grow text-gray-700 bg-gray-50 my-4">
        <div className="flex justify-between items-center my-4">
          {texts.map((text,index)=>(
            <p className=" text-xl " key={index}>{text}</p>
          ))}
           <button className="inline-block  bg-bgBtn text-sm hover:scale-105 active:scale-95 text-gray-800 font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300">
            {btnTitle}
          </button>
        </div>
        <div className="h-52 ">
         
        </div>
      </div>
    </>
  );
}
