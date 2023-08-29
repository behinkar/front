import React from "react";
import Select from "react-select";
import { twMerge } from "tailwind-merge";
function AppSelect({ className = "", name, options, placeholder }) {
  return (
    <>
      <Select
        className={twMerge("  w-full   rounded-md", className)}
        classNamePrefix="select"
        isClearable={true}
        isRtl={true}
        isSearchable={true}
        name={name}
        placeholder={placeholder}
        options={options}
      />
    </>
  );
}

export default AppSelect;

// {[
//     { value: "kerman", label: "کرمان" },
//     { value: "rafsenjan", label: "رفسنجان" },
//     { value: "vanilla", label: "مس سرچشمه" },
//   ]}
