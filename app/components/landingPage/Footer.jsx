import React from "react";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
function Footer() {
  return (
    <div className="rounded-lg  p-4 shadow-md text-gray-700 bg-gray-50 mt-6  ">
      <div className="flex justify-center py-4">
        <div className="">
          <p className="">ما را در شبکه های اجتماعی دنبال کنید.</p>
          <div className="flex items-center justify-center gap-6 py-4 border-b border-gray-400">
            <AiOutlineInstagram size={25} />
            <BsTelegram size={25} />
            <AiOutlineLinkedin size={25} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <ItemListComponent
          title="کارجو"
          Items={["کارآموزی", "فرصت های شغلی", "رزومه ساز", "آکادمی"]}
        />
        <ItemListComponent
          title="کارفرما"
          Items={["ثبت آگهی", "استخدام تضمینی"]}
        />
        <ItemListComponent
          title="بهین کار"
          Items={["درباره ما", "ارتباط با ما", "قوانین و مقرارت"]}
        />
      </div>
      <div className="pt-4 text-gray-700 flex justify-center">
        <p className="text-sm font-bold">تمامی حقوق محفوظ</p>
      </div>
    </div>
  );
}

export default Footer;

function ItemListComponent({ title,Items }) {
  return (
    <>
      <div className="flex flex-col items-center ">
        <p className="font-bold pb-2  text-xl">{title}</p>
        <div className="w-24 h-0.5 bg-gray-800"></div>
        <div className="mt-2">
        {Items.map((item,index)=>(
          <p key={index} className="my-3 text-center">{item}</p>
        ))}
        </div>
      </div>
    </>
  );
}
