"use client";
import React from "react";
import { Footer, TopMenu } from "../components/landingPage";
import ProgressPart from "../components/buildcv/ProgressPart";
import InfoCard from "../components/buildcv/InfoCard";
import { MdContacts, MdWorkHistory, MdSchool } from "react-icons/md";
import { FaBook, FaMedal, FaUserTie } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { GiEarthAfricaEurope } from "react-icons/gi";
import SocialCard from "../components/buildcv/SocialCard";
import InputApp from "../components/share/InputApp";
import AppBtn from "../components/share/AppBtn";
import InputAreaApp from "../components/share/InputAreaApp";
import AppSelect from "../components/share/AppSelect";

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
  JobStatus: [
    { value: "1", label: "جویای کار" },
    { value: "2", label: " به دنبال شغل بهتر" },
  ],
};
function page() {
  return (
    <>
      <TopMenu />
      <div className="grid grid-cols-[7fr,3fr] min-h-screen  gap-8 p-4">
        <div className=" flex flex-col gap-6 h-full  ">
          <div className="border border-colorTitle rounded p-6 ">
            <div className="flex text-colorTitle w-full items-center gap-3 border-b border-b-[#567EBF] pb-4">
              <FaUserTie size={25} />
              <span className=" font-bold">اطلاعات فردی</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 px-6">
              <div className="flex  items-center gap-4 ">
                <div className="w-20 h-20 bg-gray-300  rounded-full"></div>
                <InputApp name="نام *" />
              </div>
              <InputApp name="نام خانوادگی *" />
              {/* part2 */}
              <div className="flex  items-center  ">
                <AppBtn
                  className="px-2 rounded-md  inline-block whitespace-nowrap  ml-5"
                  label="آپلود عکس"
                />
                <AppSelect
                  placeholder="*جنسیت"
                  name="gender"
                  options={dataForSelect.gender}
                />
              </div>

              <AppSelect
                className="my-auto"
                placeholder="وضعیت تاهل  *"
                name="MaritalStatus"
                options={dataForSelect.MaritalStatus}
              />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 px-6">
              {/* part3 */}
              <AppSelect
                placeholder="وضعیت خدمت*"
                name="soliderStatus"
                options={dataForSelect.soliderStatus}
              />
              <AppSelect
                placeholder="وضعیت شغل فعلی *"
                name="JobStatus"
                options={dataForSelect.JobStatus}
              />
              <InputApp name="سال تولد  *" />
              <InputApp name=" تخصص *" />
              <InputApp name=" تلفن همراه *" />
              <InputApp name=" ایمیل   *" />
              <InputApp name=" استان *" />
              <InputApp name=" شهرستان *" />
            </div>
            <div className="mt-8 grid grid-cols-1 px-6">
              {/* part3 */}
              <InputAreaApp name=" آدرس محل سکونت" />
            </div>
          </div>

          {data.map((item, index) => (
            <>
              <InfoCard title={item.title} content={item.content}>
                {item.icon}
              </InfoCard>
            </>
          ))}
          <SocialCard />
        </div>
        <div className="h-full ">
          <div className=" border border-colorTitle rounded p-4">
            <ProgressPart />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 px-4 py-6">
        <AppBtn className="px-2 rounded-md ml-5" label=" ذخیره" />
        <AppBtn className="px-2 rounded-md ml-5" label="دریافت رزومه " />
      </div>
      <Footer />
    </>
  );
}

export default page;
