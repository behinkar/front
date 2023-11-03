"use client";
import React from "react";
import { Footer, TopMenu } from "../../components/landingPage";
import ProgressPart from "../../components/buildcv/ProgressPart";
import InfoCard from "../../components/buildcv/InfoCard";
import { MdContacts, MdWorkHistory, MdSchool } from "react-icons/md";
import { FaBook, FaMedal, FaUserTie } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { GiEarthAfricaEurope } from "react-icons/gi";
import SocialCard from "../../components/buildcv/SocialCard";
import InputApp from "../../components/share/InputApp";
import AppBtn from "../../components/share/AppBtn";
import InputAreaApp from "../../components/share/InputAreaApp";
import AppSelect from "../../components/share/AppSelect";
import TopMenuEmployer from "@/app/components/share/TopMenuEmployer";

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
      <TopMenuEmployer />

      <div className="border border-colorTitle m-4 rounded p-6  bg-[#eaf0fc]">
        <div className="flex text-colorTitle w-full items-center gap-3 border-b border-b-[#567EBF] pb-4">
          {/* <FaUserTie size={25} /> */}
          <span className=" font-bold">ویژگی های آگهی های شغلی </span>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-10 gap-y-10 px-6">
          <InputApp name=" عنوان آگهی  " />
          <InputApp name=" حوزه شغلی " />
          {/* part3 */}
          <AppSelect
            placeholder="استان"
            name="soliderStatus"
            options={dataForSelect.soliderStatus}
          />
          <AppSelect
            placeholder="شهر"
            name="JobStatus"
            options={dataForSelect.JobStatus}
          />

          <AppSelect
            placeholder="نوع حضور"
            name="soliderStatus"
            options={dataForSelect.soliderStatus}
          />
          <AppSelect
            placeholder="نوع قرارداد"
            name="JobStatus"
            options={dataForSelect.JobStatus}
          />
          <AppSelect
            placeholder=" حقوق"
            name="soliderStatus"
            options={dataForSelect.soliderStatus}
          />
          <AppSelect
            placeholder="حداقل حقوق "
            name="JobStatus"
            options={dataForSelect.JobStatus}
          />
          {/* <InputApp name=" تلفن همراه *" />
              <InputApp name=" ایمیل   *" />
              <InputApp name=" استان *" />
              <InputApp name=" شهرستان *" /> */}
        </div>
        <p className="text-colorTitle font-bold mt-6 px-6 text-xl mb-3 ">
          مزایا
        </p>
        <div className="flex px-6 gap-4 ">
          <label className="cursor-pointer label flex items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <span className="label-text text-colorTitle font-bold">
              ناهار و پذیرایی{" "}
            </span>
          </label>
          <label className="cursor-pointer label flex items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <span className="label-text text-colorTitle font-bold">
              {" "}
              سرویس{" "}
            </span>
          </label>
          <label className="cursor-pointer label flex items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <span className="label-text text-colorTitle font-bold"> بیمه </span>
          </label>
          <label className="cursor-pointer label flex items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <span className="label-text text-colorTitle font-bold">
              {" "}
              محل اسکان{" "}
            </span>
          </label>
        </div>
        <div className="mt-6 grid grid-cols-1 px-6">
          {/* part3 */}
          <p className="text-colorTitle font-bold  text-xl mb-4 ">
            شرح جایگاه شغلی{" "}
          </p>
          <InputAreaApp
            rows={6}
            name="  شامل مسئولیت ها،مهارت های مورد نیاز،شرایط احراز،تعهدات اجباری،مزایا شغلی و ویژگی های تیم"
          />
        </div>
      </div>

      {/* part---------2 */}
      <div className="border border-colorTitle rounded p-6  m-4 bg-[#eaf0fc]">
        <div className="flex text-colorTitle w-full items-center gap-3 border-b border-b-[#567EBF] pb-4">
          {/* <FaUserTie size={25} /> */}
          <span className=" font-bold">ویژگی های کارجو </span>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-10 gap-y-10 px-6">
          <AppSelect
            placeholder="جنسیت کارجو"
            name="soliderStatus"
            options={dataForSelect.soliderStatus}
          />
          <AppSelect
            placeholder="وضعیت تاهل"
            name="JobStatus"
            options={dataForSelect.JobStatus}
          />

          <AppSelect
            placeholder=" وضعیت خدمت"
            name="soliderStatus"
            options={dataForSelect.soliderStatus}
          />
          <AppSelect
            placeholder=" حداقل مدرک مورد نظر"
            name="JobStatus"
            options={dataForSelect.JobStatus}
          />
          <AppSelect
            placeholder=" سابقه کار مرتبط"
            name="soliderStatus"
            options={dataForSelect.soliderStatus}
          />
          <div className="grid grid-cols-2 gap-4">
            <AppSelect
              placeholder="حداقل سن "
              name="JobStatus"
              options={dataForSelect.JobStatus}
            />
            <AppSelect
              placeholder="حداکثر سن "
              name="JobStatus"
              options={dataForSelect.JobStatus}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 px-6">
          {/* part3 */}
          <p className="text-colorTitle font-bold  text-xl mb-4 ">
            شرح جایگاه شغلی{" "}
          </p>
          <InputAreaApp
            rows={6}
            name="  شامل مسئولیت ها،مهارت های مورد نیاز،شرایط احراز،تعهدات اجباری،مزایا شغلی و ویژگی های تیم"
          />
        </div>
      </div>
      <btn className="btn btn-outline btn-primary mr-4">
        + ذخیره در پیش نویس
      </btn>
      <div className="grid grid-cols-2 gap-6 px-4 py-6">
        <AppBtn
          className="px-2 rounded-md ml-5 text-colorTitle font-bold"
          label=" ذخیره"
        />
        <AppBtn
          className="px-2 rounded-md ml-5 text-colorTitle font-bold"
          label="دریافت رزومه "
        />
      </div>
      <Footer />
    </>
  );
}

export default page;
