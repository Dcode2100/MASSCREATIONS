import React from "react";
import { Box } from "@mui/material";
const cartmessage = [
  { message: "Lowest Prices in last 90 days" },
  { message: "Comfortable and Stylish" },
];
const Cartheadermsg = () => {
  return (
    <div>
      <Box className="relative m-auto mx-8  flex gap-5 text-[12px]">
        {cartmessage.map((message,index) => (
          <Box key={index} className=" border-2 border-gray-500 p-5 ">
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
    </div>
  );
};

export default Cartheadermsg;
