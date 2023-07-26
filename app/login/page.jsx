"use client";
import React from "react";
import InputApp from "../components/Input/InputApp";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  function handleClick() {
    router.push("/register");
  }
  return (
    <div className="">
      <div className="grid grid-cols-[2fr_3fr] bg-gray-300">
        <div
          className=" bg-contain bg-no-repeat bg-right"
          style={{ backgroundImage: `url('/images/bgLogin.png')` }}
        ></div>

        <div className="min-h-screen bg-gray-300  flex justify-center items-center ">
          <div className="">
            <p className="font-bold text-sm mb-1 text-gray-500">ورود کارفرما</p>
            <div className=" rounded-lg shadow-lg bg-gray-50 ">
              <div className="p-6 pb-0 ">
                <InputApp label="ایمیل یا شماره موبایل" />
                <InputApp label="رمز عبور" />
                <p className="text-xs text-gray-500 mb-4">فراموشی رمز عبور</p>
                <div className="flex justify-center mb-4">
                  <button className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline transition duration-300">
                    ورود
                  </button>
                </div>
              </div>
              <p className="text-xs pr-3 pb-3 text-gray-500 ">
                <span className="">حساب کارفرمایی ندارید؟</span>
                <span
                  onClick={handleClick}
                  className=" cursor-pointer hover:font-bold mr-1"
                >
                  ثبت نام کارفرما
                </span>
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
