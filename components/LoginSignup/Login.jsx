import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Ref } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/router";
import loginAuthSlice from "../../features/authentication/loginauthslice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Login = ({ setSwitchpage }) => {
  const dispatch = useDispatch();
  const loginAuth = useSelector((state) => state.loginAuth);
  const [input, setInput] = useState({ email: "", password: "" });

  const handleComponentSwitch = () => {
    setSwitchpage((prev) => !prev);
  };

  function handleInput(e) {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = input;

    try {
      const login = await supabase.auth.signIn({ email, password });
      dispatch(
        loginAuthSlice.actions.Login({
          uuid: login.user.id,
        })
      );
    } catch (error) {
      // Handle login error here
      console.error("Login failed:", error.message);
    }
    try{
      const login =  await // add the login feature in this place
      
    }
  };

  return (
    <div className="login__center-wrapper m-auto flex flex-col gap-7 sm:w-[100%] lg:w-[65%] ">
      <div className="login-form__header flex flex-col  ">
        <h1 className="login-form__header__title mb-[1rem] text-2xl">
          Mass Creations
        </h1>
        <p className="login-form__header__subtitle text-4xl">Welcome Back</p>
        <span className="login-form__header__subtitle text-md gap-2 xl:flex">
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
          className="input"
          type="text"
          placeholder="Email"
          name="email"
          value={loginAuth.userEmail}
          onChange={handleInput}
        ></input>
      </div>
      <div className="input-wrapper  ">
        <input
          type="alpha-numeric"
          className="input"
          name="password"
          placeholder="Password"
          value={input.password}
          onChange={handleInput}
        ></input>
      </div>
      <button
        onClick={handleSubmit}
        className="login-form__button rounded-xl bg-black px-4 py-2 text-xl text-white transition-transform duration-200 hover:scale-[1.02]"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
