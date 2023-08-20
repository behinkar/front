import React from "react";

function AppBtn({ label = "ساخت رزومه" }) {
  return (
    <button className="inline-block  bg-bgBtn text-sm hover:scale-105 active:scale-95 text-gray-800 font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300">
      {label}
    </button>
  );
}

export default AppBtn;
