import React, { useState, useEffect } from "react";
import Percentoff from "./Percentoff";
import Headerbottom from "./Headerbottom";
import Headertop from "./Headertop";
import Headercenter from "./Headercenter";
import Dropdown from "./Dropdown";
import Sidenav from "./Sidenav.jsx";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
const Header = () => {
  const [smsidemenu, setSmsidemenu] = useState(false);
  const isOpen = useSelector((state) => state.cart.isOpen);
  const [isHeaderTopVisible, setIsHeaderTopVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsHeaderTopVisible(scrollTop <= 0);
    };
    // the window is given the scroll event listener and if there is scroll then execute the handleScroll function,

    window.addEventListener("scroll", handleScroll);
    // return the window with the scroll event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`header-child-wrapper relative transition-all duration-300 ${
        isHeaderTopVisible ? "headertop-visible" : "headertop-hidden"
      }`}
    >
      <Headertop />

      <div className="bg-white max-xs:hidden">
        <Headercenter />
      </div>

      <Sidenav setSmsidemenu={setSmsidemenu} smsidemenu={smsidemenu} />

      <Headerbottom smsidemenu={smsidemenu} setSmsidemenu={setSmsidemenu} />
      <div
        className={`cart-wrapper z-1  absolute right-0 top-0 translate-x-[100%] transition-all duration-500 ${
          isOpen ? "header-cart-open" : ""
        }`}
      >
        {" "}
        <Cart />
      </div>
    </div>
  );
};
export default Header;
