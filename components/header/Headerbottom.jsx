import React from 'react'
import { navlinks } from '../common'
import { BsCart } from "react-icons/bs";
import { AiOutlineUser } from 'react-icons/ai';
import Dropdown from './Dropdown'
import Menutoggle from './Menutoggle'

const Headerbottom = () => {
    const [drop,setDrop] = React.useState(null)
  return (
    <div>
      <div className="Header relative  flex h-[3.5rem] items-center justify-between bg-green-300">
        <div className="ml-8 w-min  pr-1 text-2xl text-black">KEYPINI</div>
        <div className="links flex h-full list-none items-center gap-14  ">
          {navlinks.map((link, index) => (
            <Menutoggle
              index={index}
              items={link}
              setDrop={setDrop}
              key={index}
            />
          ))}
        </div>
        <div className="mr-8  flex w-min gap-3">
          <BsCart
            style={{ fontSize: "1.2rem" }}
            className="cursor-pointer transition-all hover:scale-105"
          />
          <AiOutlineUser
            style={{ fontSize: "1.3rem" }}
            className="cursor-pointer transition-all hover:scale-105"
          />
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
}

export default Headerbottom