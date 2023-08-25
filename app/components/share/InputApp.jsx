import React from "react";

function InputApp({ name }) {
  return (
    <div className="grow flex items-center">
      <input
        type="text"
        placeholder={name}
        className="border border-colorTitle placeholder:text-colorTitle w-full px-4 py-3 rounded-md"
      />
    </div>
  );
}

export default InputApp;
