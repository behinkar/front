import React from "react";

function AdsBanners() {
  return (
    <div className="flex justify-center gap-4 max-w-5xl mx-auto">
      <Banner  btnTitle='ساخت رزومه' texts={['رزومه نداری؟!','خودتو خوب معرفی کن ...']}/>
      <Banner  btnTitle='شروع آموزش'  texts={['حرفه ای وارد شو!!']}/>
    </div>
  );
}

export default AdsBanners;

// inner componnet

function Banner({btnTitle,texts}) {
  return (
    <>
      <div class="rounded-lg flex flex-col justify-between p-4 shadow-md grow text-gray-700 bg-gray-50">
        {texts.map((text,index)=>(
          <p className="mt-4 text-xl " key={index}>{text}</p>
        ))}
       
        <div className="flex justify-end ">
          <button className="inline-block mt-6 bg-gray-600 text-sm hover:bg-blue-600 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline transition duration-300">
            {btnTitle}
          </button>
        </div>
      </div>
    </>
  );
}
