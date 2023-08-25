import React from "react";

function InputAreaApp({ name }) {
  return (
    <div className="grow flex items-center">
      <textarea
        id=""
        cols="30"
        rows="3 "
        placeholder={name}
        className="border border-colorTitle placeholder:text-colorTitle w-full px-4 py-3 rounded-md"
      ></textarea>
    </div>
  );
}

export default InputAreaApp;
