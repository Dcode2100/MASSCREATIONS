import Image from "next/image";
import React from "react";
import { Ref } from "react";
const Login = ({ setSwitchpage }) => {
  const currentPage = "login";
  const handleComponentSwitch = () => {
      setSwitchpage(prev => !prev)
  };
  

  return (
    <div className="login__center-wrapper m-auto flex lg:w-[65%] sm:w-[100%] flex-col gap-7 ">
      <div className="login-form__header flex flex-col  ">
        <h1 className="login-form__header__title mb-[1rem] text-2xl">
          Mass Creations
        </h1>
        <p className="login-form__header__subtitle text-4xl">Welcome Back</p>
        <span className="login-form__header__subtitle text-md xl:flex gap-2">
          <h4>Don't have an account?{""} </h4>
          <p
            className="duration-400 cursor-pointer text-green-400 transition-colors hover:text-green-500"
            onClick={handleComponentSwitch}
          >
            Signup
          </p>
        </span>
      </div>
      <div className="input-wrapper ">
        <input
          className="input  "
          name="email"
        ></input>
        <label className="input-wrapper__label ">
          Email
        </label>
      </div>
      <div className="input-wrapper  ">
        <input
          className="input w-full "
          name="password"
        ></input>
        <label className="input-wrapper__label ">
          Password
        </label>
      </div>
      <button className="login-form__button rounded-xl bg-black px-4 py-2 text-xl text-white transition-transform duration-200 hover:scale-[1.02]">
        Login
      </button>
    </div>
  );
};

export default Login;

