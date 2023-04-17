import React, { useState } from "react";
import Percentoff from "./Percentoff";
import Headerbottom from "./Headerbottom";
import Headertop from "./Headertop";
import Headercenter from "./Headercenter";
import Dropdown from "./Dropdown";

const Header = () => {

  return (
    <div>
      <Headertop/>
      <Headercenter/>
      <Headerbottom />
      
    </div>
  );
};

export default Header;
