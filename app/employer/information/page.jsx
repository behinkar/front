"use client";
import React from "react";
import { Footer } from "../../components/landingPage";

import { MdContacts, MdWorkHistory, MdSchool } from "react-icons/md";
import { FaBook, FaMedal, FaUserTie } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { BsPeopleFill } from "react-icons/bs";

import { GiEarthAfricaEurope } from "react-icons/gi";
import SocialCard from "../../components/buildcv/SocialCard";
import InputApp from "../../components/share/InputApp";
import AppBtn from "../../components/share/AppBtn";
import InputAreaApp from "../../components/share/InputAreaApp";
import AppSelect from "../../components/share/AppSelect";
import TopMenuEmployer from "../../components/share/TopMenuEmployer";

const data = [
  {
    title: "درباره من",
    content: "متنی درباره ویژگی های شخصیتی و حرفه ای خود بنویسید.",
    icon: <MdContacts size={30} className="text-colorTitle" />,
  },
  {
    title: "سوابق کاری و کارآموزی",
    content:
      "شامل کارآموزی رسمی یا هر تجربه فنی مانند شاگرد مکانیک ... را بیان کنید.",
    icon: <MdWorkHistory size={30} className="text-colorTitle" />,
  },
  {
    title: "اطلاعات تحصیلی",
    content: "اطلاعات کلیه مقاطع تحصیلی خود را با افزودن لایه جدید تکمیل کنید.",
    icon: <MdSchool size={30} className="text-colorTitle" />,
  },
  {
    title: "دوره های آموزشی",
    content: "دوره های تخصصی و عمومی که تاکنون گذرانده اید را وارد کنید.",
    icon: <FaBook size={30} className="text-colorTitle" />,
  },
  {
    title: "افتخارات",
    content: "افتخارات علمی، ورزشی و ... که کسب کرده اید را وارد کنید.",
    icon: <FaMedal size={30} className="text-colorTitle" />,
  },

  {
    title: "مهارت های شغلی و نرم افزاری",
    content: "",
    icon: <FiMonitor size={30} className="text-colorTitle" />,
  },

  {
    title: "زبان خارحی",
    content: "",
    icon: <GiEarthAfricaEurope size={30} className="text-colorTitle" />,
  },
];
const dataForSelect = {
  gender: [
    { value: "men", label: "مرد" },
    { value: "women", label: "زن" },
  ],
  MaritalStatus: [
    { value: "married", label: "متاهل" },
    { value: "single", label: "مجرد" },
  ],
  soliderStatus: [
    { value: "1", label: "پایان خدمت" },
    { value: "2", label: "معافیت دایم" },
    { value: "3", label: "معافیت تحصیلی" },
    { value: "4", label: "در حال انجام" },
    { value: "5", label: "مشمول" },
  ],
  numPerson: [
    { value: "1", label: "کمتر از 10 نفر " },
    { value: "2", label: "  10-100 نفر  " },
    { value: "3", label: "  100-1000 نفر  " },
    { value: "4", label: " بیش از 1000 نفر   " },
  ],
};
function BuildAds() {
  return (
    <>
      <TopMenuEmployer />
      <div className=" mx-auto max-w-5xl min-h-screen  gap-8 p-4 ">
        <div className=" flex flex-col gap-6 h-full  ">
          <div className="border border-colorTitle rounded md:p-6 p-0  bg-[#EAF0FC]">
            <div className="flex text-colorTitle w-full items-center gap-3 border-b border-b-[#567EBF] p-4">
              <BsPeopleFill size={25} />
              <span className=" font-bold">اطلاعات شرکت</span>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 px-6">
              <div className=" flex flex-col md:flex-row   items-center gap-4 ">
                <div className="w-20 h-20 bg-gray-300  rounded-full"></div>
                <AppBtn
                  className="md:hidden px-2 rounded-md  inline-block whitespace-nowrap  "
                  label="آپلود عکس"
                />
                <InputApp className="w-full md:w-min" name="نام شرکت *" />
              </div>
              <InputApp name="شماره تماس  *" />
              {/* part2 */}
              <div className="flex  items-center  ">
                <AppBtn
                  className="hidden px-2 rounded-md  md:inline-block whitespace-nowrap  ml-5"
                  label="آپلود عکس"
                />
                <InputApp name="ایمیل شرکت   *" />
              </div>

              <InputApp name="   وب سایت" />
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-x-6 gap-y-6 px-6">
              {/* part3 */}

              <InputApp name=" استان *" />
              <InputApp name=" شهرستان *" />
            </div>
            <div className="mt-8 grid grid-cols-1 px-6">
              {/* part3 */}
              <InputAreaApp name=" آدرس محل سکونت" />
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-x-6 gap-y-6 px-6">
              <AppSelect
                placeholder=" حوزه فعالیت*"
                name="soliderStatus"
                options={dataForSelect.soliderStatus}
              />
              <AppSelect
                placeholder="   تعداد پرسنل"
                name="numPerson"
                options={dataForSelect.numPerson}
              />
            </div>
            <div className="mt-8 grid grid-cols-1 px-6">
              {/* part3 */}
              <InputAreaApp name="  درباره شرکت " />
            </div>
            <div className="flex justify-center my-6">
              <AppBtn
                className="px-6 rounded-md  inline-block whitespace-nowrap  "
                label=" ثبت اطلاعات"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BuildAds;
