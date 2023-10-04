import React from "react";
import { twMerge } from "tailwind-merge";
function InputApp({ name,className }) {
  return (
    <div className={twMerge("grow flex items-center ",
    className
    )}>
      <input
        type="text"
        placeholder={name}
        className="border border-colorTitle placeholder:text-colorTitle w-full px-4 py-3 rounded-md"
      />
    </div>
  );
}

export default InputApp;
