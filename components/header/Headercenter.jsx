import React from "react";

const Headercenter = () => {
  return (
    <div>
      <div className="Header relative flex h-[2.5rem] w-full items-center justify-end  ">
        <div className=" h-full w-min whitespace-nowrap ">
          <ul className="flex h-full  ">
            <li className="flex items-center border-r-2 border-black px-3 transition-all hover:text-blue-400">
              <h3>CallUs - 7678096369</h3>
            </li>
            <li className="flex items-center border-r-2 border-black  px-3 transition-all hover:text-blue-400">
              <a href="orderstatus" className="cursor-pointer">
                Order Status
              </a>
            </li>
            <li className="flex items-center border-r-2 border-black  px-3 transition-all hover:text-blue-400">
              <a href="about" className="cursor-pointer">
                About
              </a>
            </li>
            <li className="flex items-center border-r-2 border-black  px-3 transition-all hover:text-blue-400">
              <a href="about" className="cursor-pointer">
                Gift Cards
              </a>
            </li>
            <li className="flex items-center px-3 transition-all hover:text-blue-400">
              <a href="Complaint" className="cursor-pointer">
                Complaints
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Headercenter;
