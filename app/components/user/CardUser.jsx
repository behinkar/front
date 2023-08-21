"use client";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";
import { BiChevronLeft } from "react-icons/bi";
function CardUser() {
  return (
    <>
      <div className="max-w-5xl border border-[#2C4875] rounded  mx-auto my-16">
        <div className="flex justify-center p-8 flex-col border-b border-[#2C4875] pb-20  items-center gap-6">
          <FaRegUserCircle size={80} color="#FFC14C" />
          <span className="">اسم کاربر</span>
          <div className="bg-[#FFEAC3] w-2/3 h-4 rounded-full shadow-md"></div>
          <div className=" w-2/3">
            <span className="">کامل شده</span>
          </div>
        </div>
        <AppDisclosure
          title="مشاهده ودریافت رزومه"
          content="  در اینده اضافه میشود"
        />
        <div className="border-b border-[#2C4875] h-1"></div>

        <AppDisclosure title="تکمیل رزومه" content="  در اینده اضافه میشود" />
      </div>
    </>
  );
}

export default CardUser;

function AppDisclosure({ title, content }) {
  return (
    <>
      <Disclosure className="">
        {({ open }) => (
          /* Use the `open` state to conditionally change the direction of an icon. */
          <>
            <Disclosure.Button className="flex w-full p-4 items-center  justify-between ">
              {title}
              <BiChevronLeft
                size={25}
                className={open ? "-rotate-90 transform " : ""}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="p-4">{content}</Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
