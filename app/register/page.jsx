"use client";
import React from "react";
import InputApp from "../components/Input/InputApp";
import Head from "next/head";
import { useRouter } from "next/navigation";
function RegisterPage() {
  const router = useRouter();
  function handleNavigationClick(url) {
    router.push(url);
  }
  return (
    <div>
      <Head>
        <title>ثبت نام کارفرما</title>
      </Head>
      <div className="grid grid-cols-[2fr_3fr] bg-gray-300">
        <div className=" bg-contain bg-no-repeat " style={{ backgroundImage: `url('/images/bgLogin.png')` }}></div>
        <div className=" min-h-screen">
          <div className="flex justify-between items-center p-4 text-gray-600 text-sm">
            <span className="">Logo</span>
            <span className="">
              <span  className="">
                حساب دارید؟
              </span>
              <span onClick={() => handleNavigationClick("/login")} className=" mr-2 hover:font-bold cursor-pointer">ورود</span>
            </span>
          </div>
          <div className=" flex justify-center items-center ">
            <div className="">
              <p className="font-bold text-sm mb-1 text-gray-500">
                ثبت نام کارفرما
              </p>
              <div className=" rounded-lg shadow-lg bg-gray-50 ">
                <div className="p-6 pb-0 ">
                  <InputApp label="نام و نام خانوادگی" />
                  <InputApp label="ایمیل" />
                  <InputApp label="موبایل" />
                  <InputApp label="رمز" />
                  <InputApp label="تکرار رمز" />
                  <div className="flex justify-center pb-5 ">
                    <button className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline transition duration-300">
                      ثبت نام
                    </button>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
