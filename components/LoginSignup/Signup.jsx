import React from "react";
import { FaUserAlt, FaUserMinus } from "react-icons/fa";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { AiOutlineUser } from "react-icons/ai";
const Signup = () => {
  return (
    <div className="relative flex h-[calc(100vh_-_6.6rem)] gap-[10%] px-[5%] py-[2%] ">
      <div className="signup-left relative h-full w-[40%] rounded-md bg-gray-200  px-[3%] pt-[2%] shadow-xl shadow-slate-500">
        <div className="signup-left-header m-auto flex  w-min justify-center gap-[15%] whitespace-nowrap px-[5%] pb-[3%] ">
          <button className="text-md flex w-min items-center justify-center gap-2 rounded-xl bg-transparent p-3 px-7 shadow-md transition-all duration-200 hover:scale-[1.05]">
            <FaUserAlt className=" text-green-500" /> <h2>Sign in</h2>
          </button>
          <button className="text-md flex w-min items-center justify-center gap-2 rounded-xl bg-green-400 p-3 px-7 shadow-md transition-all duration-200 hover:scale-[1.05]">
            <FaUserMinus className="text-xl text-gray-200" /> <h2>Sign Up</h2>
          </button>
        </div>
        <div className="google-auth flex h-[7%] mb-[3%] w-[50%] m-auto justify-evenly ">

          <div className="google flex bg-blue-200 aspect-square justify-center rounded-[100%] border border-black items-center ">
            G
          </div>
          <div className="google flex aspect-square bg-red-300 justify-center rounded-[100%] border border-black items-center ">
            F
          </div>
          <div className="google flex aspect-square bg-yellow-300 justify-center rounded-[100%] border border-black items-center ">
            G
          </div>
        </div>
        <div className="signup-inputs mt-2 flex flex-col gap-[1rem] 
        ">
          <input
            type="text"
            placeholder="Username"
            className="active:borer-2 w-full rounded-xl p-3 px-5 shadow-md active:border-green-500"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full rounded-xl p-3 px-5 shadow-md"
          />
          <input
            type="text"
            placeholder="Password"
            className="w-full rounded-xl p-3 px-5 shadow-md"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="w-full rounded-xl p-3 px-5 shadow-md"
          />
        </div>
        <FormControlLabel
          required
          control={<Checkbox />}
          label="Accept Terms & Conditions"
          className="mt-4"
        />
        <button className="text-md mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 p-3 px-7 shadow-md transition-all duration-200 hover:scale-[1.02]">
          <FaUserAlt className=" text-green-500" /> <h2>Sign Up</h2>
        </button>
      </div>
      <div className="login-right inset-0 m-auto h-full w-1/2">right</div>
    </div>
  );
};

export default Signup;
