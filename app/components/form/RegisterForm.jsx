"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import AppBtn from "../share/AppBtn";
import classNames from "classnames";
import http from "@/app/utils/httpService";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
function RegisterForm() {
  const router = useRouter();
  const [showNextForm, setShowNextForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = async (value) => {
    setPhoneNumber(value.phone_number);
    try {
      const { data, status } = await http.post("/accounts/register/", value);
      if (status < 400) {
        setShowNextForm(true);
      } else {
        toast.error("🦄 Wow so easy!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      let textError = error.response.data.phone_number[0];
      if (!Boolean(textError)) {
        textError = "شماره موبایل تکراری است";
      }

      toast.error(textError, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const onVerifySubmit = async (value) => {
    console.log("value", value);
    let dataForSend = {};

    dataForSend.token = value.token;
    dataForSend.phone_number = phoneNumber;

    const { data, status } = await http.post(
      `/accounts/phone-verify/?token=${value.token}&phone_number=${phoneNumber}`,
      dataForSend
    );
    if (status < 400) {
      localStorage.setItem("tbehin", value.token);
      router.push("/login");
    }
  };
  return (
    <>
      {!showNextForm ? (
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
            type="text"
            {...register("password1", {
              required: "رمز عبور الزامی می باشد",
              pattern: {
                value: /^.{8,}$/,
                message: "   رمز عبور باید حداقل 8 کارکتر باشد. ",
              },
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
            type="text"
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
            <AppBtn
              label=" دریافت کد فعال سازی"
              type="submit"
              className="bg-[#567EBF]"
              size="lg"
            />
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onVerifySubmit)}>
          <label className="label"> کد تایید</label>
          <input
            className={`input-class ${classNames({
              "focus:border-red-400    border-red-400 border-2":
                errors?.token?.message,
            })}`}
            type="tel"
            {...register("token", {
              required: "کد تایید الزامی می باشد",
              pattern: {
                value: /^\d{6}$/,
                message: "کد تایید 6 رقمی می باشد.    ",
              },
            })}
            maxLength="6"
          />
          {Boolean(errors?.token?.message) && (
            <span className="error-label">{errors.token.message} </span>
          )}

          <div className="flex justify-center pb-5  mt-6">
            <AppBtn
              label="  تایید کد "
              type="submit"
              className="bg-[#567EBF]"
              size="lg"
            />
          </div>
        </form>
      )}
    </>
  );
}

export default RegisterForm;
