import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Buttonone = ({ title }) => {
  return (
    <div className="relative m-auto mt-6 flex w-min items-center gap-2 rounded-lg bg-blue-600 px-3 py-[0.5rem] text-[0.9rem]">
      <button className="w-min whitespace-nowrap after:h-full after:bg-black ">{title}</button>
      <BsArrowUpRight style={{ fontSize: "0.9rem" }} />
    </div>
  );
};

export default Buttonone;
