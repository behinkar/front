import React from "react";

const data = [
  { title: "اطلاعات فردی", percent: "10" },
  { title: "درباره من", percent: "20" },
  { title: "اطلاعات تحصیلی", percent: "0" },
  { title: "دوره های آموزشی", percent: "0" },
  { title: "افتخارات", percent: "0" },
  { title: "سوابق کاری و کارآموزی", percent: "0" },
  { title: "مهارت های فنی و نرم افزاری", percent: "0" },
  { title: "زبان های خارجی", percent: "0" },
  { title: "شبکه های اجتماعی", percent: "0" },
];
function ProgressPart() {
  return (
    <>
      <div className="text-colorTitle">
        <p className="text-center font-bold my-4 text-xl">درصد تکمیل رزومه</p>
        <div className=" w-40 h-40 bg-gray-200 rounded-full mx-auto my-4"></div>
        {data.map((item, index) => (
          <div key={index} className="flex justify-between mb-10 px-4">
            <span className="">{item.title}</span>
            <div className="flex  items-center">
              <span className=" text-xs ">%</span>
              <p className="w-6 text-left ">{item.percent}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProgressPart;
