import React from "react";
import { BiShapePolygon } from "react-icons/bi";
import InputWithIcon from "../share/InputWithIcon";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelegram, BsLinkedin } from "react-icons/bs";
function SocialCard() {
  return (
    <>
      <div className="border text-colorTitle border-colorTitle rounded p-6  ">
        <div className="flex items-center gap-3">
          <BiShapePolygon size={30} />

          <span className=" font-bold">شبکه های اجتماعی</span>
        </div>
        <div className="grid grid-cols-2 mt-8 gap-8 max-w-4xl mx-auto">
          <InputWithIcon
            palceholder="اینستاگرام"
            icon={<AiFillInstagram size={30} />}
          />
          <InputWithIcon palceholder="تلگرام" icon={<BsTelegram size={30} />} />

          <InputWithIcon palceholder="بله" />
          <InputWithIcon
            palceholder="لینکدین"
            icon={<BsLinkedin size={30} />}
          />
        </div>
      </div>
    </>
  );
}

export default SocialCard;
