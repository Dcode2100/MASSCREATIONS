import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Ref } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "../../features/authentication/loginAuthSlice";
import storage from "redux-persist/lib/storage";

const Login = ({ setSwitchpage }) => {
  const dispatch = useDispatch();
  const router = useRouter();
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
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.error("Login failed:", error.message);
      } else {
        console.log("User logged in:", data);
        dispatch(
          login({
            uuid: data.user.id,
            username: data.username,
            email: data.user.email,
          })
        );
        router.push("/"); 
      }
    } catch (error) {
      // Handle unexpected errors here (e.g., network errors)
      console.error("An unexpected error occurred:", error.message);
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
          value={input.email}
          onChange={handleInput}
        />
      </div>
      <div className="input-wrapper  ">
        <input
          type="password"
          className="input"
          name="password"
          placeholder="Password"
          value={input.password}
          onChange={handleInput}
        />
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
