import Image from "next/image";
import React from "react";

const Login = ({ setSwitchpage }) => {
  const currentPage = "login";
  const handleComponentSwitch = () => {
    {
      currentPage === "login" ? setSwitchpage(true) : "";
    }
  };
  return (
    <div className="bg-green-100 h-[100vh] flex ">
      <div className="relative inset-0 m-auto  flex h-[80vh] w-[80vw] rounded-lg bg-green-300">
        <div className="relative h-[100%] w-[50%] bg-slate-300">
          <Image src={"/Sample/samp5.jpg"} fill objectFit="cover" />
        </div>
        <div className="relative m-auto flex h-[100%] w-[50%] items-center justify-center p-8">
          <div className="login-form flex max-w-[80rem] flex-col gap-[1rem] rounded-lg bg-green-400 p-9">
            <h1 className="login-form__header__title text-3xl">Login</h1>
            <div className="username-input-cover flex flex-col gap-2">
              <p className="username-input-cover__title">Email</p>
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="active:borer-2 w-full rounded-xl p-2 pl-5 shadow-md active:border-green-500"
                // value={input.username}
                // onChange={handleInput}
              />
            </div>
            <input
              type="text"
              placeholder="Password"
              name="password"
              className="active:borer-2 w-full rounded-xl p-2 pl-5 shadow-md active:border-green-500"
              // value={input.username}
              // onChange={handleInput}
            />
            <button className="login-form__button rounded-lg bg-green-700 p-2 text-white hover:scale-105 duration-200">
              Login
            </button>
            <p className="login-form__header__subtitle ">
              Don't have an account?{" "}
              <span
                className="login-form__header__subtitle__link cursor-pointer"
                onClick={handleComponentSwitch}
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
