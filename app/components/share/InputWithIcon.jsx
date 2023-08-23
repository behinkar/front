import React from "react";

function InputWithIcon({ palceholder, icon }) {
  return (
    <div className="border border-colorTitle rounded-md  flex items-center   text-colorTitle">
      <input
        type="text"
        placeholder={palceholder}
        className="placeholder:text-colorTitle rounded-md grow text-colorTitle font-bold placeholder:font-normal py-4 px-4 outline-none focus:outline-none"
      />
      <div className="ml-3">{icon}</div>
    </div>
  );
}

export default InputWithIcon;
