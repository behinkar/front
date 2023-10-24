"use client";
import React from "react";
import InputApp from "../components/Input/InputApp";
import { useRouter, useSearchParams } from "next/navigation";
import LoginForm from "../components/form/LoginForm";

function LoginPage() {
  const router = useRouter();
  const url = useSearchParams();
  const whichUser = url.get("w");
  function handleRouteClick(url) {
    router.push(url);
  }
  return (
    <div className="">
      <div className="md:grid md:grid-cols-[2fr_3fr] bg-gray-300">
        <div
          className="hidden md:block bg-cover bg-no-repeat bg-right"
          style={{ backgroundImage: `url('/images/bgLogin.png')` }}
        ></div>

        <div className="min-h-screen relative bg-gray-300  flex flex-col ">
          <div className="absolute left-0 right-0">
            <div className="flex  justify-between items-center p-4 text-gray-600 text-sm">
              <div className="font-black text-colorTitle text-xl">بهین کار</div>
              {whichUser != "employer" && (
                <span className="">
                  <span className="">کارفرما هستید؟ </span>
                  <span
                    onClick={() =>
                      handleNavigationClick("/register?w=employer")
                    }
                    className=" ml-2 mr-1 hover:font-bold cursor-pointer text-colorTitle"
                  >
                    ورود
                  </span>
                </span>
              )}
            </div>
          </div>
          <div className="grow flex justify-center items-center">
            <div className="">
              <p className="font-bold text-sm mb-1 text-gray-500">
                {whichUser == "employer" ? " ورود کارفرما" : " ورود کارجو"}
              </p>
              <div className=" rounded-lg shadow-lg bg-gray-50 ">
                <div className="p-6 pb-0 ">
                  <LoginForm />
                
                </div>
                <p className="text-xs pr-3 pb-3 text-gray-500 ">
                  <span className="">حساب کارفرمایی ندارید؟</span>
                  <span
                    onClick={() => handleRouteClick("/register?w=employer")}
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
    </div>
  );
}

export default LoginPage;
