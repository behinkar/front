"use client";
import React, { useState } from "react";
import InputApp from "../components/Input/InputApp";
import Head from "next/head";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import PhoneNumberInput from "../components/Input/PhoneNumberInput";
import { useForm, Controller } from "react-hook-form";
import { Button, Input } from "@material-tailwind/react";
import filled from "@material-tailwind/react/theme/components/timeline/timelineIconColors/filled";

import classNames from "classnames";

function RegisterPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [whichUser, setWhichUser] = useState('jobSeeker')
  const router = useRouter();
  const url = useSearchParams();
  const whichUser = url.get("w");

  function handleNavigationClick(url) {
    router.push(url);
  }

  function onSubmit(data) {
    console.log(data);
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">شماره همراه</label>

                    <Controller
                      name="phoneNumber"
                      control={control}
                      rules={{
                        required: "شماره موبایل الزامی است",
                        pattern: {
                          value: /^09\d{9}$/,
                          message: "شماره موبایل صحیح نمی باشد",
                        },
                      }}
                      render={({ field }) => (
                        <input
                          className={`input-class ${classNames({
                            "focus:border-red-400    border-red-400 border-2":
                              errors?.phoneNumber?.message,
                          })}`}
                          type="tel"
                          maxLength="11"
                          placeholder="09139939426"
                          {...field}
                        />
                      )}
                    />
                    {Boolean(errors?.phoneNumber?.message) && (
                      <span className="error-label">
                        {errors.phoneNumber.message}{" "}
                      </span>
                    )}

                    <div className="flex justify-center pb-5  mt-6">
                      <Button type="submit" className="bg-[#567EBF]" size="lg">
                        دریافت کد فعال سازی
                      </Button>
                      {/* <button
                        type="submit"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline transition duration-300"
                      >
                        دریافت کد فعال سازی
                      </button> */}
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
