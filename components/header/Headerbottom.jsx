import React, { useState, useEffect } from "react";
import { navlinks } from "../common";
import { BsCart } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import Dropdown from "./Dropdown";
import Menutoggle from "./Menutoggle";
import Sidenav from "./Sidenav.jsx";
import Carthover from "./Carthover";
import { useDispatch } from "react-redux";
import { openCart, closeCart, addToCart } from "../../features/cart/cartSlice";

const Headerbottom = ({ smsidemenu, setSmsidemenu }) => {
  const dispatch = useDispatch();

  const handleMouseClick = () => {
    dispatch(openCart());
  };

  const [drop, setDrop] = useState(null);

  return (
    <div>
      <div className="Header relative  flex h-[3.5rem] items-center justify-between bg-green-300 ">
        <div className="ml-5 flex w-min flex-row items-center  gap-4 pr-1  text-2xl">
          <div className="small-screen-menu b  md:hidden ">
            {
              <button
                className="flex transition-all"
                onClick={() => setSmsidemenu((prev) => !prev)}
              >
                <BiMenu style={{ fontSize: "1.7rem" }} />
              </button>
            }
          </div>
          <h1>KEYPINI</h1>
        </div>
        <div className="links flex h-full list-none items-center">
          {navlinks.map((link, index) => (
            <Menutoggle
              key={index}
              index={index}
              setDrop={setDrop}
              items={link}
            />
          ))}
        </div>
        <div className="mr-5  flex w-min items-center gap-4 text-xl">
          <a href="/account/accountpage" className="flex items-center gap-1">
            <AiOutlineUser
              style={{ fontSize: "1.5rem" }}
              className="cursor-pointer transition-all hover:scale-105"
            />
            <h2>Account{`username`}</h2>
          </a>
          <div
            className="Cart-button flex cursor-pointer items-center gap-1"
            onClick={handleMouseClick}
          >
            <BsCart
              style={{ fontSize: "1.2rem" }}
              className="cursor-pointer transition-all hover:scale-105"
            />
            <h2>Cart</h2>
          </div>
        </div>
      </div>

      {drop && (
        <div
          className="drop z-10"
          onMouseEnter={() => {
            setDrop(drop);
          }}
          onMouseLeave={() => {
            setDrop(null);
          }}
        >
          <Dropdown items={navlinks[drop]} />
        </div>
      )}
    </div>
  );
};

export default Headerbottom;
