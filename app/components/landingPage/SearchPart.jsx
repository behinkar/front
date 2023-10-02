"use client";
import Link from "next/link";
import React, { useState } from "react";
import Select from "react-select";
import { RiSearch2Line } from "react-icons/ri";

function SearchPart() {
  return (
    <div
      className="bg-[#b2c4e2]/[.46] min-h-[500px] flex flex-col rounded-b-3xl   bg-contain bg-no-repeat bg-center "
      style={{ backgroundImage: "url('/images/bgsearch.png')" }}
    >
      <p className="text-center py-6 font-bold text-xl text-gray-600">
        بهین کار سامانه کاریابی انلاین در جنوب شرق ایران
      </p>
      <div className="flex grow justify-center items-center gap-4 my-6  ">
        <input
          type="text"
          className="rounded border placeholder:text-[#828080] placeholder:text-sm w-64 border-[#c9cacc] py-2 px-4 focus:outline-none focus:border-2 focus:border-blue-500 focus:shadow-outline-blue "
          placeholder="عنوان شغلی ..."
        />
        <Select
          className="w-64 hidden md:block"
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
          className="w-64 hidden md:block "
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
        <div className="px-4 bg-bgBtn py-1 transition duration-150 ease-in rounded-md cursor-pointer active:scale-95 hover:scale-110">
          <RiSearch2Line size={25} className="text-gray-700 " color="" />
        </div>
      </div>
      <Link
        className="text-center py-6 font-bold text-sm text-gray-700"
        href="#"
      >
        مشاهده همه فرصت های شغلی
      </Link>
    </div>
  );
}

export default SearchPart;
