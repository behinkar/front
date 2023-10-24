"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import AppBtn from "../share/AppBtn";
import classNames from "classnames";
import http from "@/app/utils/httpService";
import { useState } from "react";

function LoginForm() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = async (value) => {
    let token = localStorage.getItem("tbehin");

    if (!token) {
      const { data, status } = await http.post(
        `/accounts/send-login-token-phone-again/?phone_number=${value.phone_number}`
      );
      if (status < 400) {
        localStorage.setItem("tbehin", data.params.token);
      }
    }

    setPhoneNumber(value.phone_number);
    value.user_token = localStorage.getItem("tbehin");
    const { data: dataLogin, status } = await http.post(
      "/accounts/login-with-phone/",
      value
    );
    if (status < 400) {
      localStorage.setItem("tokenbehin", dataLogin.data?.tokens?.access);
      //   {
      //     "data": {
      //         "user_id": "22",
      //         "phone_number": "+989139939426",
      //         "tokens": {
      //             "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MTk3NjMxLCJqdGkiOiJmYzgwYTZlY2E4ZGU0NDEyYWIyY2NhOTUwNDE2MWI0MyIsInVzZXJfaWQiOjIyfQ.Rf9IBi3ArxjWnEO-AwY2WwzLjj5ED55fOcZMpJQbWZQ",
      //             "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5ODE5NzYzMSwianRpIjoiNTA2ZGIyYzRjNDlhNGM3N2I2Njg0N2YzNjkzZjQ5NjEiLCJ1c2VyX2lkIjoyMn0.LA2xd6thjKpR4hug0LmMtAVilCHktCn8PGVXdWXYo9g"
      //         }
      //     }
      // }
      router.push("/");
    }
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
          type="password"
          {...register("password", {
            required: "رمز عبور الزامی می باشد",
          })}
        />

        <div className="flex justify-center pb-5  mt-6">
          <AppBtn
            label="  ورود  "
            type="submit"
            className="bg-[#567EBF]"
            size="lg"
          />
        </div>
      </form>
    </>
  );
}

export default LoginForm;
