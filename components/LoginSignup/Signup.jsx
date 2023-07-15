import React, { useState, useEffect } from "react";
import { FaUserAlt, FaUserMinus } from "react-icons/fa";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { supabase } from "../../lib/supabaseClient";

const Signup = ({ setSwitchpage }) => {
  const currentPage = "Signup";
  const handleComponentSwitch = () => {
    setSwitchpage((prev) => !prev);
  };
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  function handleInput(e) {
    const { name, value, phone } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = input;
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Error signing up:", error.message);
    } else {
      console.log("User registered:", user);
      // Redirect or perform any other actions
    }
  };
  return (
    <div className="login__center-wrapper m-auto  flex lg:w-[60%] md:w-[90%] w-[100%]  flex-col gap-7 ">
      <div className="login-form__header flex flex-col  ">
        <h1 className="login-form__header__title mb-[1rem] text-[1.5rem] font-bold">
          Welcome to Mass Creations
        </h1>
        <h1 className="login-form__header__title mb-[0.2rem] text-xs">
          Shop latest trends for keychain and accessories at affordable prices
        </h1>
        <div className="signup-left-header m-auto flex  w-min justify-center gap-5 whitespace-nowrap px-[5%] pb-[3%] "></div>
        
        <div
          className="signup-inputs mt-2 flex flex-col gap-[1rem] text-xs font-thin 
        "
        >
          <div className="input-wrapper ">
            <input
              className="input  "
              type="text"
              placeholder="Username"
              name="username"
              value={input.username}
              onChange={handleInput}
            />
          </div>
          <div className="input-wrapper">
            <input
              className="input"
              type="text"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={handleInput}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="alpha-numeric"
              className="input"
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={handleInput}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              className="input  "
              placeholder="Confirm Password"
              input={input.confirmpassword}
              onChange={handleInput}
            />
          </div>
        </div>
        <FormControlLabel
          required
          className=" font-light "
          control={<Checkbox />}
          label="Accept Terms & Conditions"
        />
        <button
          onClick={handleSubmit}
          className="login-form__button w-full rounded-xl bg-black px-4 py-2 text-sm text-white transition-transform duration-200 hover:scale-[1.02]"
        >
          SignUp
        </button>
        <div className="mt-1 flex w-full gap-1 text-sm">
          <h5 className="">Already have an account? </h5>
          <h5 onClick={handleComponentSwitch} className="cursor-pointer text-green-400 transition-colors duration-200 hover:text-green-500">
            login
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Signup;
