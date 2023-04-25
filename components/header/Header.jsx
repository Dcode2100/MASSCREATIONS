import React, { useState } from "react";
import Percentoff from "./Percentoff";
import Headerbottom from "./Headerbottom";
import Headertop from "./Headertop";
import Headercenter from "./Headercenter";
import Dropdown from "./Dropdown";
import Sidenav from "./Sidenav";

const Header = () => {
    const [smsidemenu, setSmsidemenu] = useState(false);

  return (
    <React.Fragment>
      <Headertop />
      <div className="max-xs:hidden">
        <Headercenter />
      </div>
      {smsidemenu && <Sidenav setSmsidemenu={setSmsidemenu} />}
      <Headerbottom smsidemenu={smsidemenu} setSmsidemenu={setSmsidemenu} />
    </React.Fragment>
  );
};

export default Header;
