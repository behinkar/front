import React from "react";
import AppBtn from "../share/AppBtn";

const data = [
  {
    title: "شرکت های همراه ",
    num: "تعداد",
  },
  {
    title: "فرصت های شغلی  ",
    num: "تعداد",
  },
  {
    title: "کارجویان همراه ",
    num: "تعداد",
  },
];

function InfoPart() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 max-w-6xl  mx-auto my-14">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </>
  );
}

export default InfoPart;

function Card({ data }) {
  return (
    <>
      <div className="text-colorTitle font-bold ">
        <p className="py-6 text-center font-bold text-xl">{data.num}</p>
        <p className=" text-center ">{data.title}</p>
      </div>
    </>
  );
}
