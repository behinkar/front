// import React from "react";

// function InputApp({ label, placeholder }) {
//   return (
// <div className="mb-4">
//   <label className="block text-gray-600 text-sm  mb-2">{label}</label>
//   <input
//     className="w-full border rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//     type="text"
//     placeholder={placeholder}
//   />
// </div>
//   );
// }

// export default InputApp;
import { useController } from "react-hook-form";

const PhoneNumberInput = ({ label, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="label">{label}</label>
      <input className="input-class" type="text" placeholder={placeholder} />
    </div>
  );
};

export default PhoneNumberInput;
