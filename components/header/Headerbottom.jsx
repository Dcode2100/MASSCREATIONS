import React, { useState, useEffect } from "react";
import { navlinks } from "../common";
import { BsCart } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import Dropdown from "./Dropdown";
import Menutoggle from "./Menutoggle";
import Sidenav from "./Sidenav";
import Carthover from "./Carthover";
import { useDispatch } from "react-redux";
import { openCart, closeCart, addToCart } from "../../features/cart/cartSlice";

const Headerbottom = ({
  smsidemenu,
  setSmsidemenu,
  setCartactive,
  cartactive,
}) => {

  const dispatch = useDispatch();

  const handleMouseClick = () => {
    dispatch(openCart());
  };


  const [drop, setDrop] = useState(null);
  
  return (
    <div>
      <div className="Header relative  flex h-[3.5rem] items-center justify-between bg-green-300  ">
        <div className="ml-5 flex w-min flex-row items-center  gap-4 pr-1  text-2xl">
          <div className="small-screen-menu md:hidden">
            {!smsidemenu && (
              <button
                className="flex transition-all"
                onClick={() => setSmsidemenu((prev) => !prev)}
              >
                <BiMenu style={{ fontSize: "1.7rem" }} />
              </button>
            )}
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
        <div className="mr-5  flex w-min gap-5">
          <div className="Cart-button" onClick={handleMouseClick}>
            <BsCart
              style={{ fontSize: "1.2rem" }}
              className="cursor-pointer transition-all hover:scale-105"
            />
            
          </div>
          <a href="/account">
            <AiOutlineUser
              style={{ fontSize: "1.3rem" }}
              className="cursor-pointer transition-all hover:scale-105"
            />
          </a>
        </div>
      </div>

      {drop && (
        <div
          className="drop"
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
