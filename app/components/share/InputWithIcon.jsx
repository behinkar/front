import React from "react";

function InputWithIcon({ palceholder }) {
  return (
    <div className="border border-colorTitle rounded-md">
      <input type="text" placeholder={palceholder} />
      icon
    </div>
  );
}

export default InputWithIcon;
