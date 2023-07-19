import React, { useState, useEffect } from "react";
import { FaUserAlt, FaUserMinus } from "react-icons/fa";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { supabase } from "../../lib/supabaseClient";

const Signup = ({ setSwitchpage }) => {
  const [uuid, setUuid] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const handleComponentSwitch = () => {
    setSwitchpage((prev) => !prev);
  };
  // state decleration for input
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  // function for Handle input change
  function handleInput(e) {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = input;
    const signup = await supabase.auth
      .signUp({
        email,
        password,
      })
      .then((res) => {
        console.log(res.data.user);
        setUuid(res.data.user.id);
      });
    const userData = {
      username: input.username,
      email: input.email,
      uuid: uuid,
    };
    const { data, error } = await supabase.from("users").insert([userData]);
    if (error) {
      console.error("Error pushing userdata:", error);
    } else {
      console.log("Userdata pushed successfully:",uuid);
    }
  };

  return (
    <div className="login__center-wrapper relative m-auto  flex w-[100%] flex-col gap-7  md:w-[90%] lg:w-[60%] ">
      <div className="login-form__header relative flex flex-col  ">
        <h1 className="login-form__header__title relative mb-[1rem] text-[1.5rem] font-bold">
          Welcome to Mass Creations
        </h1>
        <h1 className="login-form__header__title mb-[0.2rem] text-xs">
          Shop latest trends for keychain and accessories at affordable prices
        </h1>
        <div className="signup-left-header m-auto flex  w-min justify-center gap-5 whitespace-nowrap px-[5%] pb-[3%] "></div>

        <div className="signup-inputs mt-2 flex flex-col gap-[1rem] text-xs font-thin">
          <div className="input-wrapper ">
            <input
              className="input"
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
              className="input"
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
          <h5
            onClick={handleComponentSwitch}
            className="cursor-pointer text-green-400 transition-colors duration-200 hover:text-green-500"
          >
            login
          </h5>
        </div>
      </div>
      {showPrompt && (
        <div className="absolute inset-0 m-auto flex h-[full] w-full flex-col items-center justify-center gap-10 rounded-xl bg-red-300 p-8 shadow-2xl  transition-all  duration-300 ease-in-out ">
          <p className="text-3xl font-bold">
            Check your email for the verification link
          </p>
          <button
            className="w-full  rounded-xl bg-black p-2 text-xl font-bold text-white transition-all duration-200 ease-in-out hover:scale-[1.08] "
            onClick={() => {
              setShowPrompt(false); // Hide the prompt
              setSwitchpage((prev) => !prev); // Redirect to the login page
            }}
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default Signup;
