import React, { useState } from "react";
import Percentoff from "./Percentoff";

const navlinks =[
  {name: "Home", link: "/"},
  {name: "Product", link: "/"},
  {name: "Service", link: "/"},
  {name: "Contact", link: "/"},
]
const Header = () => {
  const [dropdown, setDropdown] = useState(null);
  return (
    <div>
      <Percentoff />
      <div className="Header h-[5rem]  flex justify-between items-center bg-green-300 relative">
        <div className="ml-8 text-3xl text-black pr-1 bg-blue-200 w-min">
          KEYPINI
        </div>
        <div className="flex items-center h-full text-blue-800 list-none links gap-14 ">
          {navlinks.map((link,index) => (
             <li key={index} className="transition-all li-center hover:text-yellow-900" href="/">
             {link.name}
           </li>
          ))}
          
        </div>
        <div className="flex  mr-8 w-min gap-3">
          <button className="transition-all hover:scale-125">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1.3em"
              width="1.3em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <button className="transition-all hover:scale-125">
            {" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1.3em"
              width="1.3em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header;
