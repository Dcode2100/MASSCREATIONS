import React, { useState } from "react";
import Signup from "../../components/LoginSignup/Signup";
import Login from "../../components/LoginSignup/Login";
import Image from "next/image";

// import Authhoc from '../../../features/authentication/Authhoc';
const signuppage = () => {
  const [switchpage, setSwitchpage] = useState(true);

  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <div className="flex h-full w-full items-center justify-center bg-red-300">
        <div className="login lg:my-15  relative shadow-lg max-md:m-3 sm:w-[80%] md:w-[70%] lg:flex lg:h-[80%] lg:w-[70%] lg:max-w-[80rem] lg:rounded-e-[2.5rem] lg:rounded-s-[2.5rem]">
          <div className="login__container relative flex flex-col  bg-white max-lg:rounded-[2rem] max-lg:p-[2.5rem]  max-sm:w-full lg:w-1/2 lg:rounded-s-[2.5rem] ">
            {switchpage ? (
              <Login setSwitchpage={setSwitchpage} />
            ) : (
              <Signup setSwitchpage={setSwitchpage} />
            )}
          </div>
          <div className="picture relative h-full w-1/2 bg-red-400 object-contain max-sm:hidden lg:rounded-e-[2.5rem]">
            <Image
              src="/Sample/samp2.jpg "
              className=" overflow-hidden rounded-e-[2.5rem]"
              fill
              alt="login picture"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signuppage;
