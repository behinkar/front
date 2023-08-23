import React from "react";
import { Footer, TopMenu } from "../components/landingPage";
import ProgressPart from "../components/buildcv/ProgressPart";
import InfoCard from "../components/buildcv/InfoCard";
import { MdContacts, MdWorkHistory, MdSchool } from "react-icons/md";
import { FaBook, FaMedal } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { GiEarthAfricaEurope } from "react-icons/gi";
import SocialCard from "../components/buildcv/SocialCard";

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
