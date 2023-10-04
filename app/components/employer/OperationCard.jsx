"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import ResultPart from "../searchPage/ResultPart";
import CardJob from "../share/CardJob";
import CardCourse from "./CardCourse";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function OperationCardEmployer() {
  let [categories] = useState({
    "همه آگهی های": [],
    "  آگهی های فعال": [],
    " آگهی های غیرفعال ": [],
    "  پیش نویس  ": [],
  });

  return (
    <div className="max-w-6xl mx-auto my-8 mb-40">
      <div className="w-full p-0  md:p-4  border border-[#2C4875] rounded">
        <Tab.Group>
          <Tab.List className="flex space-x-1  border-b border-b-[#2C4875] p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 md:text-sm text-xs font-bold leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-gray-200 hover:text-blue-950"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel>
              <div className="flex gap-5 flex-col justify-center m-0 md:m-4 border  p-2 md:p-6">
                <CardJob />
                <CardJob />
                <CardJob />
                <CardJob />
                <CardJob />
                <CardJob />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <ResultPart />
            </Tab.Panel>
            <Tab.Panel>
              <div className="flex gap-5 flex-col justify-center m-4 border p-2 md:p-6">
                <CardCourse />
                <CardCourse />
                <CardCourse />
                <CardCourse />
                <CardCourse />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
