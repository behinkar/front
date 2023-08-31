"use client";
import Link from "next/link";
import React, { useState } from "react";
import Select from "react-select";
import { RiSearch2Line } from "react-icons/ri";
import AppBtn from "../share/AppBtn";

function AdsPart() {
  return (
    <div
      className=" min-h-[500px] flex flex-col rounded-b-3xl   bg-contain bg-no-repeat bg-center "
      style={{ backgroundImage: "url('/images/bgEmployer.png')" }}
    >
      <AddAds />
    </div>
  );
}

export default AdsPart;

function AddAds() {
  return (
    <>
      <div className="lense w-2/3 h-40 mx-auto mt-auto p-8 mb-20 flex justify-center items-center">
        <AppBtn label="ثبت رایگان آگهی های شغلی" />
      </div>
    </>
  );
}
