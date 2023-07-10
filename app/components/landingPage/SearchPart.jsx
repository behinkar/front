"use client";
import React, { useState } from "react";
import Select from "react-select";
import { BiSearch } from "react-icons/bi";

function SearchPart() {
  return (
    <div className="flex justify-center items-center gap-4 my-6">
      <input type="text" className="self-stretch rounded border placeholder:text-[#828080] placeholder:text-sm w-52 border-[#c9cacc] py-2 px-4 focus:outline-none focus:border-2 focus:border-blue-500 focus:shadow-outline-blue " placeholder="عنوان شغلی ..." />
      <Select
        className="w-52 "
        classNamePrefix="select"
        isClearable={true}
        isRtl={true}
        isSearchable={true}
        name="color"
        placeholder="استان..."
        options={[
          { value: "kerman", label: "کرمان" },
          { value: "rafsenjan", label: "رفسنجان" },
          { value: "vanilla", label: "مس سرچشمه" },
        ]}
      />
       <Select
        className="w-52 "
        classNamePrefix="select"
        isClearable={true}
        isRtl={true}
        isSearchable={true}
        name="color"
        placeholder="دسته بندی..."
        options={[
          { value: "kerman", label: "مهندسی" },
          { value: "rafsenjan", label: "راننده" },
          { value: "vanilla", label: "کارگری " },
        ]}
      />
      <BiSearch
       size={30}
       className=' cursor-pointer hover:scale-105 text-gray-600 '
       color=""
      />
    </div>
  );
}

export default SearchPart;
