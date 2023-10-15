import React from "react";
import { twMerge } from "tailwind-merge";
function AppBtn({ label = "ساخت رزومه", className, type }) {
  return (
    <button
      type={type}
      className={twMerge(
        "inline-block  bg-bgBtn text-sm hover:scale-105 active:scale-95 whitespace-nowrap text-gray-800 font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300",
        className
      )}
    >
      {label}
    </button>
  );
}

export default AppBtn;
