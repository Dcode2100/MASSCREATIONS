import React, { useState, useRef, useEffect } from "react";
import { smNavlinks } from "../common";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Link from "next/link";

const MenuItem = ({ link, openLinks, toggleLink, isNested,setSmsidemenu }) => {
  const isOpen = openLinks.includes(link.title);
  const paddingLeft = isNested ? "pl-6" : "pl-0";
  const hasSubmenu = link.submenu && link.submenu.length > 0;

  return (
    <div className="">
      <div
        onClick={() => toggleLink(link.title)}
        className={`sidenav__body ${paddingLeft} flex justify-between p-3 text-[1rem] transition-all duration-500`}
      >
        {!hasSubmenu ? (
          <Link className='cursor-pointer' onClick={() => setSmsidemenu(false)} href={link.path}>
            <h1>{link.title}</h1>
          </Link>
        ) : (
          
          <h1 className="select-none">{link.title}</h1>
        )}

        {hasSubmenu && (
          <div className="flex items-center justify-center">
            {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        )}
      </div>

      {isOpen &&
        link.submenu &&
        link.submenu.map((subLink, index) => (
          <MenuItem
            key={index}
            link={subLink}
            openLinks={openLinks}
            toggleLink={toggleLink}
            isNested={true}
            setSmsidemenu={setSmsidemenu} 
          />
        ))}
    </div>
  );
};

const Sidenav = ({ setSmsidemenu, smsidemenu }) => {
  const [openLinks, setOpenLinks] = useState([]);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleLink = (link) => {
    if (openLinks.includes(link)) {
      setOpenLinks(openLinks.filter((l) => l !== link));
    } else {
      setOpenLinks([...openLinks, link]);
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    }
  }, [openLinks]);

  return (
    <div
      className={`absolute flex w-full ${
        smsidemenu ? "translate-x-0" : "translate-x-[-100%]"
      } z-10 h-[calc(100vh-_3rem)] transform bg-opacity-100 transition-all duration-500 ease-in-out`}
    >
      <div className="sidenav w-[80%] overflow-auto bg-white px-4">
        {/* ... Header code ... */}
        <div
          ref={contentRef}
          className="sidenav__body text-[1rem] transition-all duration-500"
        >
          {smNavlinks &&
            smNavlinks.map((link, index) => (
              <MenuItem
                key={index}
                link={link}
                openLinks={openLinks}
                toggleLink={toggleLink}
                setSmsidemenu={setSmsidemenu}
              />
            ))}
        </div>
      </div>
      <div
        className="h-full w-[20%]"
        onClick={() => setSmsidemenu((prev) => !prev)}
      ></div>
    </div>
  );
};

export default Sidenav;
