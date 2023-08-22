import React from "react";
import { BiShapePolygon } from "react-icons/bi";
import InputWithIcon from "../share/InputWithIcon";
function SocialCard() {
  return (
    <>
      <div className="border text-colorTitle border-colorTitle rounded p-6  ">
        <div className="flex items-center gap-3">
          <BiShapePolygon size={30} />

          <span className=" font-bold">شبکه های اجتماعی</span>
        </div>
        <div className="grid grid-cols-2 mt-8 gap-8 max-w-4xl mx-auto">
          <InputWithIcon palceholder="اینستاگرام" />
          <InputWithIcon palceholder="تلگرام" />

          <InputWithIcon palceholder="بله" />
          <InputWithIcon palceholder="لینکدین" />
        </div>
      </div>
    </>
  );
}

export default SocialCard;
