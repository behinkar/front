import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

function InfoCard({ title, content, children }) {
  return (
    <div className="border border-colorTitle rounded p-6 flex items-center justify-between">
      <div className="text-colorTitle">
        <div className="flex items-center gap-3">
          {children}
          
          <span className=" font-bold">{title}</span>
        </div>
        <p className="mt-6 text-sm">{content}</p>
      </div>

      <div
        className="flex  cursor-pointer hover:border-colorTitle hover:shadow-md
       hover:border-2 transform duration-100 ease-out justify-center items-center w-20 h-14
        bg-[#FFD688] border rounded-md border-gray-300"
      >
        <BsFillPlusCircleFill size={30} className="text-colorTitle" />
      </div>
    </div>
  );
}

export default InfoCard;
