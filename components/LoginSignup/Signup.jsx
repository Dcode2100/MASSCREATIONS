import React,{useState,useEffect} from "react";
import { FaUserAlt, FaUserMinus } from "react-icons/fa";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { supabase } from "../../lib/supabaseClient";
const Signup = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
 function handleInput(e) {
   const { name, value,phone } = e.target;
   setInput((prevInput) => ({
     ...prevInput,
     [name]: value,
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
    <div className="relative flex h-[calc(100vh_-_8rem)] items-center justify-center">
      <div className="signup-left relative h-[90%] w-[30%] rounded-md bg-gray-200  px-[3%] pt-[2%] shadow-xl shadow-slate-500">
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
            name="username"
            className="active:borer-2 w-full rounded-xl p-3 px-5 shadow-md active:border-green-500"
            value={input.username}
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="w-full rounded-xl p-3 px-5 shadow-md"
            value={input.email}
            onChange={handleInput}
          />
          <input
            type="alpha-numeric"
            name="password"
            placeholder="Password"
            className="w-full rounded-xl p-3 px-5 shadow-md"
            value={input.password}
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="w-full rounded-xl p-3 px-5 shadow-md"
            input={input.confirmpassword}
            onChange={handleInput}
          />
        </div>
        <FormControlLabel
          required
          control={<Checkbox />}
          label="Accept Terms & Conditions"
          className="mt-4"
        />
        <button onClick={handleSubmit}  className="text-md mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 p-3 px-7 shadow-md transition-all duration-200 hover:scale-[1.02]">
          <FaUserAlt className=" text-green-500" /> <h2>Sign Up</h2>
        </button>
      </div>
    </div>
  );
};

export default Signup;
