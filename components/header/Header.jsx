import React, { useState } from "react";
import Percentoff from "./Percentoff";
import Headerbottom from "./Headerbottom";
import Headertop from "./Headertop";
import Headercenter from "./Headercenter";
import Dropdown from "./Dropdown";
import Sidenav from "./Sidenav";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
const Header = () => {
  const [smsidemenu, setSmsidemenu] = useState(false);
  const isOpen = useSelector((state) => state.cart.isOpen);

  return (
    <div className="header-child-wrapper relative ">
      <Headertop />
      <div className="bg-white max-xs:hidden">
        <Headercenter />
      </div>
      {smsidemenu && <Sidenav setSmsidemenu={setSmsidemenu} />}
      <Headerbottom smsidemenu={smsidemenu} setSmsidemenu={setSmsidemenu} />
      <div
        className={`cart-wrapper absolute right-0 top-0 z-10 ${
          isOpen ? "open" : ""
        }`}
      >
        {" "}
        <Cart />
      </div>
    </div>
  );
};
export default Header;
