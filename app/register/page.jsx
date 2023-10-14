"use client";
import React from "react";
import Head from "next/head";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@material-tailwind/react";
import classNames from "classnames";

import axios from "axios";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const url = useSearchParams();
  const whichUser = url.get("w");

  function handleNavigationClick(url) {
    router.push(url);
  }

  function callApi(data) {
    return axios.post(
      "http://api.behinkar.ir/accounts/reggister/",
      {
        phone_number: "09139939426",
        password1: "M254512m",
        password2: "M254512m",
      },
      {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=utf-8",
      }
    );
  }

  return (
    <div>
      <Head>
        <title>ثبت نام کارفرما</title>
      </Head>
      <div className="md:grid md:grid-cols-[2fr_3fr] bg-gray-300">
        <div
          className="hidden md:block bg-cover bg-no-repeat bg-right"
          style={{ backgroundImage: `url('/images/bgLogin.png')` }}
        ></div>
        <div className=" min-h-screen flex flex-col  relative">
          <div className="absolute left-0 right-0">
            <div className="flex  justify-between items-center p-4 text-gray-600 text-sm">
              <div className="font-black text-colorTitle text-xl">بهین کار</div>

              <span className="">
                {whichUser != "employer" ? (
                  <span className="">کارفرما هستید؟ </span>
                ) : (
                  <span className="">کارجو هستید؟ </span>
                )}
                <span
                  onClick={() => {
                    if (whichUser != "employer") {
                      handleNavigationClick("/register?w=employer");
                    } else {
                      handleNavigationClick("/register");
                    }
                  }}
                  className=" ml-2 mr-1 hover:font-bold cursor-pointer text-colorTitle"
                >
                  ثبت نام
                </span>
              </span>
            </div>
          </div>
          <div className=" flex justify-center items-center  grow">
            <div className="">
              <p className="font-bold text-sm mb-1 text-gray-500">
                {whichUser == "employer" ? "ثبت نام کارفرما" : "ثبت نام کارجو"}
              </p>
              <div className=" rounded-lg shadow-lg bg-gray-50  ">
                <div className="p-6 pb-0  min-w-[300px]">
                  <form onSubmit={handleSubmit((data) => callApi(data))}>
                    <label className="label">شماره همراه</label>
                    <input
                      className={`input-class ${classNames({
                        "focus:border-red-400    border-red-400 border-2":
                          errors?.phone_number?.message,
                      })}`}
                      type="tel"
                      {...register("phone_number", {
                        required: "شماره موبایل الزامی است.",
                        pattern: {
                          value: /^09\d{9}$/,
                          message: "شماره موبایل صحیح نمی باشد",
                        },
                      })}
                      maxLength="11"
                      placeholder="09139939426"
                    />
                    {Boolean(errors?.phone_number?.message) && (
                      <span className="error-label">
                        {errors.phone_number.message}{" "}
                      </span>
                    )}

                    <label className="label mt-4">رمز عبور </label>
                    <input
                      className={`input-class ${classNames({
                        "focus:border-red-400    border-red-400 border-2":
                          errors?.phoneNumber?.message,
                      })}`}
                      type="tel"
                      {...register("password1")}
                    />
                    <label className="label mt-4">تکرار رمز عبور </label>
                    <input
                      className={`input-class ${classNames({
                        "focus:border-red-400    border-red-400 border-2":
                          errors?.phoneNumber?.message,
                      })}`}
                      type="tel"
                      {...register("password2")}
                    />

                    <div className="flex justify-center pb-5  mt-6">
                      <Button
                        type="submit"
                        className="bg-[#567EBF]"
                        size="lg"
                        onClick={callApi}
                      >
                        دریافت کد فعال سازی
                      </Button>
                    </div>
                  </form>

                  <p className="my-4 p-2 text-sm  text-gray-600">
                    حساب کاربری دارید؟
                    <Link
                      href={
                        whichUser == "employer" ? "/login?w=employer" : "/login"
                      }
                      className="mx-2 hover:text-colorTitle hover:font-bold"
                    >
                      ورود
                    </Link>
                  </p>
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
