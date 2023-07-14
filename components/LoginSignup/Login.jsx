import Image from "next/image";
import React from "react";
import { Ref } from "react";
const Login = ({ setSwitchpage }) => {
  const currentPage = "login";
  const handleComponentSwitch = () => {
    {
      currentPage === "login" ? setSwitchpage(true) : "";
    }
  };
  const handleinputposition = () => {};

  return (
    <div className="flex h-full w-full items-center justify-center bg-red-300">
      <div className="login my-13 relative h-[80%] w-[80%] max-w-[80rem] rounded-s-[2.5rem] shadow-lg xs:flex">
        <div className="login__container relative flex w-1/2 flex-col  rounded-s-[2.5rem] bg-white max-sm:w-full ">
          <div className="login__center-wrapper m-auto flex w-[50%] flex-col gap-9">
            <div className="login-form__header flex flex-col  ">
              <h1 className="login-form__header__title mb-[3rem] text-2xl">
                Mass Creations
              </h1>
              <p className="login-form__header__subtitle text-4xl">
                Welcome Back
              </p>
              <p className="login-form__header__subtitle text-md flex gap-2">
                <h5>Don't have an account?{""} </h5>
                <h5
                  className="cursor-pointer text-green-400 hover:text-green-500 transition-colors duration-400"
                  onClick={handleComponentSwitch}
                >
                  Signup
                </h5>
              </p>
            </div>
            <div className="input-wrapper relative flex gap-4  ">
              <input
                className="w-full "
                style={{ borderBottom: "1px solid gray", opacity: "0.5", }}
              ></input>
              <label className="input-wrapper__label absolute text-gray-400 active:translate-y-32">
                Email
              </label>
            </div>
            <div className="input-wrapper relative flex gap-4  ">
              <input
                className="w-full border-b-4"
                style={{ borderBottom: "1px solid gray", opacity: "0.5"}}
                name="password"
              ></input>
              <label className="input-wrapper__label absolute text-gray-400">
                Password
              </label>
            </div>
            <button className="login-form__button rounded-xl bg-black px-4 py-2 text-xl text-white hover:scale-[1.02] transition-transform duration-200">
              Login
            </button>
          </div>
          <div className="xs-visible-carousel xs:hidden">asdfasd</div>
        </div>
        <div className="picture relative h-full w-1/2 rounded-e-[2.5rem] bg-red-400 object-contain max-sm:hidden">
          <Image
            src="/Sample/samp2.jpg "
            className=" rounded-e-[2.5rem]"
            fill
            alt="login picture"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Login;
