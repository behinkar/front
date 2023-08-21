import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
function InfoCard() {
  return (
    <div className="border border-colorTitle rounded p-6 flex justify-between">
      <div className=""></div>
      <div className="flex justify-center items-center w-20 h-14 bg-[#FFD688] border rounded-md border-gray-300">
        <BsFillPlusCircleFill size={30} className="text-colorTitle" />
      </div>
    </div>
  );
}

export default InfoCard;
