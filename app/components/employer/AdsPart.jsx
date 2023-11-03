"use client";
import Link from "next/link";
import React, { useState } from "react";
import Select from "react-select";
import { RiSearch2Line } from "react-icons/ri";
import AppBtn from "../share/AppBtn";

function AdsPart() {
  return (
    <div
      className=" md:min-h-[500px] flex flex-col  rounded-b-3xl  bg-cover  bg-no-repeat bg-center "
      style={{ backgroundImage: "url('/images/bgEmployer.png')" }}
    >
      <div className="lense w-2/3 h-40 mx-auto mt-auto p-8 md:mb-20 flex justify-center items-center">
        <Link
          href="/build/ads"
          className="inline-block text-colorTitle font-bold  bg-bgBtn text-sm hover:scale-105 active:scale-95 whitespace-nowrap  py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
        >
          ثبت رایگان آگهی های شغلی
        </Link>
      </div>
    </div>
  );
}

export default AdsPart;

function AddAds() {
  return (
    <>
      <div className="lense w-2/3 h-40 mx-auto mt-auto p-8 md:mb-20 flex justify-center items-center">
        <AppBtn
          className="text-colorTitle font-bold"
          label="ثبت رایگان آگهی های شغلی"
        />
      </div>
    </>
  );
}
