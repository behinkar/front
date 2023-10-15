import { Button } from "@material-tailwind/react";

import { useForm } from "react-hook-form";

import axios from "axios";
import AppBtn from "../share/AppBtn";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (value) => {
    console.log(value);
    // if (value.phone_number === "") {
    //   return;
    // }
    // const { data } = await axios.post(
    //   "https://api.behinkar.ir/accounts/reggister/",
    //   value,
    //   {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json;charset=utf-8",
    //   }
    // );
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="label">شماره همراه</label>
        <input
          className="input-class"
          type="tel"
          maxLength="11"
          placeholder="09139939426"
          {...register("phone_number")}
        />
        {/* {Boolean(errors?.phone_number?.message) && (
          <span className="error-label">{errors.phone_number.message} </span>
        )} */}

        <label className="label mt-4">رمز عبور </label>
        <input className="input-class" type="tel" {...register("password1")} />
        <label className="label mt-4">تکرار رمز عبور </label>
        <input className="input-class" type="tel" {...register("password2")} />

        <div className="flex justify-center pb-5  mt-6">
          <AppBtn type="submit" className="bg-[#567EBF]">
            دریافت کد فعال سازی
          </AppBtn>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
