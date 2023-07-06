import React, { useState, useEffect } from "react";
import { FaUserAlt, FaUserMinus } from "react-icons/fa";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { supabase } from "../../lib/supabaseClient";

const Signup = ({ switchpage, setSwitchpage }) => {
  const currentPage = "Signup";
  const handleComponentSwitch = () => {
    {currentPage === "Signup" ? setSwitchpage(false) :""}
  }
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  function handleInput(e) {
    const { name, value, phone } = e.target;
    setInput((prevInput) => ({...prevInput,[name]: value,
    }));
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
    <div className="m-auto flex max-w-[40%] items-center justify-center p-4 ">
      <div className="signup-left relative h-[100%] rounded-md bg-gray-200 p-6 shadow-xl shadow-slate-400">
        <div className="signup-left-header m-auto flex  w-min justify-center gap-5 whitespace-nowrap px-[5%] pb-[3%] ">
          <button
            className="text-md flex w-min items-center justify-center gap-2 rounded-xl bg-green-400 p-2 px-5
            text-[0.8rem] shadow-md transition-all duration-200 hover:scale-[1.05]"
            onClick={handleComponentSwitch}
          >
            <FaUserAlt className=" text-green-500" /> <h2>Sign in</h2>
          </button>
        </div>
        <div
          className="google-auth-section m-auto my-[0.5rem] mb-4 flex
          w-[100%] justify-evenly bg-slate-300 "
        >
          <div className="google flex aspect-square items-center justify-center rounded-[100%] border border-black bg-blue-200 ">
            G
          </div>
          <div className="google flex aspect-square items-center justify-center rounded-[100%] border border-black bg-red-300 ">
            F
          </div>
          <div className="google flex aspect-square items-center justify-center rounded-[100%] border border-black bg-yellow-300 ">
            G
          </div>
        </div>
        <div
          className="signup-inputs mt-2 flex flex-col gap-[1rem] text-xs font-thin 
        "
        >
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="active:borer-2 w-full rounded-xl p-2 pl-5 shadow-md active:border-green-500"
            value={input.username}
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="w-full rounded-xl p-2 pl-5 shadow-md"
            value={input.email}
            onChange={handleInput}
          />
          <input
            type="alpha-numeric"
            name="password"
            placeholder="Password"
            className="w-full rounded-xl p-2 pl-5  shadow-md"
            value={input.password}
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="w-full rounded-xl p-2 pl-5  shadow-md"
            input={input.confirmpassword}
            onChange={handleInput}
          />
        </div>
        <FormControlLabel
          required
          className="mt-4 font-light"
          control={<Checkbox />}
          label="Accept Terms & Conditions"
        />
        <button
          onClick={handleSubmit}
          className="text-md mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 p-2 px-7 shadow-md transition-all duration-200 hover:scale-[1.02]"
        >
          <h2 className="">Sign Up</h2>
        </button>
      </div>
    </div>
  );
};

export default Signup;
