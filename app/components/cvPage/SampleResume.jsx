import React from "react";
import AppBtn from "../share/AppBtn";

function SampleResume() {
  return (
    <div className=" border  border-blue-400 p-4 max-w-6xl mx-auto my-8">
      <div className="my-8">
        <p className="text-[#2C4875] font-bold text-xl text-center block  ">
          نمونه رزومه های ساخته شده در بهین کار
        </p>
      </div>
      <div className="flex gap-8 m-8">
        <Card name="میلاد حسنی" job="برنامه نویس" />
        <div className="top-6 grow relative">
          <Card name="امیرحسین زارع" job="برنامه نویس" />
        </div>
        <Card name="ایلان ماسک" job="برنامه نویس" />
      </div>
    </div>
  );
}

export default SampleResume;

function Card({ name, job }) {
  return (
    <div className=" border rounded  border-blue-400 p-4 flex items-center grow flex-col justify-center">
      <p className="my-6">{name}</p>
      <p className="my-6">{job}</p>
      <AppBtn label="مشاهده رزومه" />
    </div>
  );
}
