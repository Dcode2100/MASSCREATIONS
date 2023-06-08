import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import Cartheadermsg from "./Cartheadermsg";

const EmptyCart = () => {
  return (
    <div>
      <Cartheadermsg />

      
      <div className=" relative mt-7">
        <div className="relative m-auto h-[15rem] w-[50%] bg-green-500 object-contain ">
          <Image
            src="/stock/shoppingcart.jpg"
            alt="Picture of the author"
            fill
          />
        </div>
        <h2 className="p-4 text-center text-[1.5rem] ">Your Cart is Empty!</h2>
      </div>
    </div>
  );
};

export default EmptyCart;
