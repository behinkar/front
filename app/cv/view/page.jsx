import React from "react";
import { CiUser } from "react-icons/ci";

const mainData = [{ name: "ایمیل" }, { name: "آدرس" }, { name: "شماره تماس" }];

const infoData = [
  { title: "", subTitle: "" },
  { title: "", subTitle: "" },
  { title: "", subTitle: "" },
  { title: "", subTitle: "" },
  { title: "", subTitle: "" },
];

function PageWatch() {
  return (
    <>
      <div className="p-3 bg-gray-100 min-h-screen">
        <div className="bg-[#0B234A] h-60 rounded-xl"></div>
        <div className="fixed top-10 bottom-0 w-72 bg-[#1D304E] right-14 h-screen shadow-lg rounded-t-full flex flex-col items-center p-4">
          <div className="w-52 h-52 rounded-full bg-gray-100 mt-8 flex justify-center items-center ">
            <CiUser size={100} />
          </div>
          <div className="mt-6 self-start text-white ">
            {mainData.map((item, index) => (
              <p key={index} className="mt-6">
                {item.name}
              </p>
            ))}
          </div>
          <div className="mt-6 self-start text-white ">
            {mainData.map((item, index) => (
              <p key={index} className="mt-6">
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PageWatch;
