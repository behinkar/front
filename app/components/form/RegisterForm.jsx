"use client";
import { Button } from "@material-tailwind/react";
import classNames from "classnames";
import { useForm } from "react-hook-form";

import axios from "axios";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const callApi = async (value) => {
    if (value.phone_number === "") {
      return;
    }

    const { data } = await axios.post(
      "https://api.behinkar.ir/accounts/reggister/",

      value,
      {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=utf-8",
      }
    );
  };
  return (
    <form onSubmit={handleSubmit(callApi)}>
      <label className="label">شماره همراه</label>
      <input
        className="input-class"
        type="tel"
        maxLength="11"
        placeholder="09139939426"
      />
      {Boolean(errors?.phone_number?.message) && (
        <span className="error-label">{errors.phone_number.message} </span>
      )}

      <label className="label mt-4">رمز عبور </label>
      <input
        className={`input-class ${classNames({
          "focus:border-red-400    border-red-400 border-2":
            errors?.phoneNumber?.message,
        })}`}
        type="tel"
        {...register("password1")}
      />
      <label className="label mt-4">تکرار رمز عبور </label>
      <input
        className={`input-class ${classNames({
          "focus:border-red-400    border-red-400 border-2":
            errors?.phoneNumber?.message,
        })}`}
        type="tel"
        {...register("password2")}
      />

      <div className="flex justify-center pb-5  mt-6">
        <Button type="submit" className="bg-[#567EBF]" size="lg">
          دریافت کد فعال سازی
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
