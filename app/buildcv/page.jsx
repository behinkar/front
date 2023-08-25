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
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-9 px-6">
              <div className="flex  items-center gap-4 ">
                <div className="w-20 h-20 bg-gray-300  rounded-full"></div>
                <InputApp name="نام *" />
              </div>
              <InputApp name="نام خانوادگی *" />
              {/* part2 */}
              <div className="flex  items-center ">
                <AppBtn label="آپلود عکس" />
                <InputApp name="جنسیت *" />
              </div>
              <InputApp name="وضعیت تاهل  *" />
              {/* part3 */}
              <InputApp name="نام خانوادگی *" />
              <InputApp name="نام خانوادگی *" />
              <InputApp name="نام خانوادگی *" />
              <InputApp name="نام خانوادگی *" />
              <InputApp name="نام خانوادگی *" />
              <InputApp name="نام خانوادگی *" />
              <InputApp name="نام خانوادگی *" />
              <InputApp name="نام خانوادگی *" />
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
        <div className=" h-full border border-colorTitle rounded p-4">
          <ProgressPart />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
