import { useForm } from "react-hook-form";

import axios from "axios";
import AppBtn from "../share/AppBtn";
import classNames from "classnames";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const onSubmit = async (value) => {
    console.log(value);
    if (value.phone_number === "") {
      return;
    }
    const { data } = await axios.post(
      "https://api.behinkar.ir/accounts/reggister/",
      value
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="label">شماره همراه</label>
        <input
          className={`input-class ${classNames({
            "focus:border-red-400    border-red-400 border-2":
              errors?.phone_number?.message,
          })}`}
          type="tel"
          {...register("phone_number", {
            required: "شماره موبایل الزامی است.",
            pattern: {
              value: /^09\d{9}$/,
              message: "شماره موبایل صحیح نمی باشد",
            },
          })}
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
              errors?.password1?.message,
          })}`}
          type="tel"
          {...register("password1", {
            required: "رمز عبور الزامی می باشد",
          })}
        />
        {Boolean(errors?.password1?.message) && (
          <span className="error-label">{errors.password1.message} </span>
        )}
        <label className="label mt-4">تکرار رمز عبور </label>
        <input
          className={`input-class ${classNames({
            "focus:border-red-400    border-red-400 border-2":
              errors?.password2?.message,
          })}`}
          type="tel"
          {...register("password2", {
            required: "تکرار رمز عبور الزامی می باشد",
            validate: (value) =>
              getValues("password1") == value || "تکرار رمز برابر نیست.",
          })}
        />
        {Boolean(errors?.password2?.message) && (
          <span className="error-label">{errors.password2.message} </span>
        )}

        <div className="flex justify-center pb-5  mt-6">
          <AppBtn type="submit" className="bg-[#567EBF]" size="lg">
            دریافت کد فعال سازی
          </AppBtn>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
