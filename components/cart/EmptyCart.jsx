import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
const cartmessage = [
  { message: "Lowest Prices in last 90 days" },
  { message: "Comfortable and Stylish" },
];
const EmptyCart = () => {
  return (
    <div>
      <Box className="m-auto mx-8 flex  gap-5 text-[12px] relative">
        {cartmessage.map((message) => (
          <Box key="message.message" className=" border-2 border-gray-500 p-5 ">
            <h2>{message.message}</h2>
          </Box>
        ))}
      </Box>
      <Box>
        <h2 className="mb-3 ml-3 mt-4  flex gap-1 text-[0.7rem]">
          <p>Note:</p> You have saved a lot
        </h2>
      </Box>
      <div className="h-[1px] bg-slate-500"></div>
      <div className=" relative mt-7">
        <div className="relative bg-green-500 h-[15rem] object-contain w-[50%] m-auto ">
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
