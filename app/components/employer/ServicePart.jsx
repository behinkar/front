import React from "react";
import AppBtn from "../share/AppBtn";

const data = [
  {
    title: "استخدام تضمینی",
    content:
      "با استفاده از این سرویس تمامی مراحل استخدام خود از جمله ثبت آگهی  در شبکه های اجتماعی بهین کار،بررسی رزومه،انجام مصاحبه،ارزیابی شخصیتی و...توسط تیم بهین کار انجام می شود.",
  },
  {
    title: "استخدام از آکادمی",
    content:
      "با استاده از این سرویس فارغ التحصیلان آکادمی بهین کار که در حوزه های مختلف تحت نظر اساتید مجرب به صورت تئوری یا عملی آموزش دیده اند و آماده ورود به بازار کار هستند به شما معرفی می شوند.",
  },
  {
    title: "تبلیغات اختصاصی",
    content:
      "با استفاده از این سرویس آگهی شما به صورت ویژه و اختصاصی در سایت و شبکه های اجتماعی بهین کار منتشر می شود.",
  },
];

function ServicePart() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 max-w-6xl  mx-auto">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </>
  );
}

export default ServicePart;

function Card({ data }) {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-900 via-blue-900 to-blue-300/30 p-4 text-white rounded flex flex-col px-4 ">
        <p className="py-6 text-center font-bold text-xl">{data.title}</p>

        <div className="grow flex-1 mt-8">
          <p className="text-justify ">{data.content}</p>
        </div>
        <div className="flex justify-center p-6 mt-10 ">
          <AppBtn label="مشاهده جزئیات" />
        </div>
      </div>
    </>
  );
}
