import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Buttonone = ({ title }) => {
  return (
    <div className="absolute bottom-0 right-0 pr-8 pb-3">
      <div className=" hover:text-white gap-2 artistic-button relative flex items-center bg-green-500 px-4 py-2 text-black transition-all duration-200 hover:bg-blue-600">
        <button>
          <p className="z-10">SHOP NOW</p>
        </button>
        <BsArrowUpRight style={{ fontSize: "0.9rem" }} />
      </div>
    </div>
  );
};

export default Buttonone;
