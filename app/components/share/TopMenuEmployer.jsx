"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosBusiness } from "react-icons/io";
import { useRouter } from "next/navigation";
import { MdOutlineExitToApp } from "react-icons/md";
import http from "@/app/utils/httpService";
function TopMenuEmployer() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    setIsLogin(localStorage.getItem("access"));
  }, []);
  const handleCheckOut = async () => {
    // const { data, status } = await http.post(`/accounts/logout/`);
    localStorage.removeItem("access");
    window.location.reload();
  };
  return (
    <div className="flex p-6 px-8 justify-between">
      <div className=" items-center gap-6 hidden md:flex">
        <Link href="/#">خانه</Link>
        <Link href="/#">ثبت رایگان آگهی</Link>
        <Link href="/#">استخدام از آکادمی</Link>
        <Link href="/#">استخدام تضمینی </Link>
        <Link href="/#">تبلیغات اختصاصی </Link>
        <Link href="/#">تبلیغات اختصاصی </Link>
        <Link href="/#">بخش کارجویان </Link>
      </div>
      <div className="flex">
        <div className="flex ml-8 items-center  gap-1">
          {Boolean(isLogin) ? (
            <>
              <details className="dropdown ">
                <summary className=" btn bg-transparent h-9">
                  <IoIosBusiness
                    size={30}
                    className=" cursor-pointer hover:scale-105"
                    color=""
                  />
                </summary>
                <ul className="p-2 shadow menu  dropdown-content z-[1] bg-gray-200 rounded-box w-40">
                  <li onClick={handleCheckOut}>
                    <div className="flex gap-2">
                      <MdOutlineExitToApp
                        size={20}
                        className=" cursor-pointer hover:scale-105"
                        color="#000"
                      />
                      <a>خروج</a>
                    </div>
                  </li>
                </ul>
              </details>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm hover:font-bold">
                ورود{" "}
              </Link>
              <span className="mx-2">/</span>
              <Link href="/register" className="text-sm hover:font-bold">
                {" "}
                ثبت نام
              </Link>
            </>
          )}
        </div>
        <div className="font-black text-colorTitle text-xl flex items-center">
          بهین کار
        </div>
      </div>
    </div>
  );
}

export default TopMenuEmployer;
