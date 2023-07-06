import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { navlinks } from "../common";
import { useRef } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Sidenav = ({ setSmsidemenu, smsidemenu }) => {
  const [openLinks, setOpenLinks] = useState([]);
  const [maxHeight, setMaxHeight] = useState(0);
   const contentRef = useRef(null);

  const toggleLink = (link) => {
    if (openLinks.includes(link)) {
      setOpenLinks(openLinks.filter((l) => l !== link));
      setMaxHeight(0);
    } else {
      setOpenLinks([...openLinks, link]);
      setMaxHeight(contentRef.current.scrollHeight);
    }
  };

  return (
    <div
      className={`  absolute flex w-full ${
        smsidemenu ? "translate-x-0" : "translate-x-[-100%]"
      }  z-10 h-[calc(100vh_-_3rem)]  transform  bg-opacity-100   transition-all duration-200 ease-linear`}
    >
      <div className=" sidenav w-[80%] bg-white px-[2%] pt-3 overflow-auto">
        <div className="sidenav__header ">
          <div className="sidenav__header__logo flex w-full justify-between px-5 ">
            <h1 className="text-[1.7rem]">KEYPINI</h1>

            <button
              onClick={() => {
                setSmsidemenu((prev) => !prev);
              }}
            >
              <div className="xs:hidden">
                <RxCross1
                  style={{
                    fontSize: "1.3rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                />
              </div>
              <h2 className="max-xs:hidden md:hidden">CLOSE</h2>
            </button>
          </div>
        </div>
        <div className="sidenav__body ml-3 mt-8 text-[1rem] transition-all duration-500">
          {navlinks &&
            navlinks.map((link1, index1) => {
              const isOpen = openLinks.includes(link1.title);
              return (
                <div key={index1} className="">
                  <div
                    ref={contentRef}
                    className="sidenav__body ml-3 mt-8 text-[1rem] transition-all duration-500"
                    style={{ maxHeight: `${maxHeight}px` }}
                  >
                    <h1
                      className=" cursor-pointer "
                      onClick={() => toggleLink(link1.title)}
                    >
                      {link1.title}
                    </h1>
                    {isOpen && isOpen ? (
                      <div>
                        <AiOutlineMinus />
                      </div>
                    ) : (
                      <div>
                        <AiOutlinePlus />
                      </div>
                    )}
                  </div>

                  {isOpen &&
                    link1.submenu &&
                    link1.submenu.map((link2, index2) => {
                      const isChildOpen = openLinks.includes(link2.title);
                      return (
                        <div
                          key={index2}
                          className="  cursor-pointer transition-all duration-500"
                          onClick={() => toggleLink(link2.title)}
                        >
                          <div className="flex justify-between bg-green-200 p-2">
                            <h2
                              className="cursor-pointer"
                              onClick={() => toggleLink(link2.title)}
                            >
                              {link2.title}
                            </h2>
                            {isChildOpen && isChildOpen ? (
                              <div>
                                <AiOutlineMinus />
                              </div>
                            ) : (
                              <div>
                                <AiOutlinePlus />
                              </div>
                            )}
                          </div>
                          <div className="w-[100%] bg-blue-200">
                            {isChildOpen &&
                              link2.submenu &&
                              link2.submenu.map((link3, index3) => {
                                return (
                                  <a
                                    key={index3}
                                    href={link3.path}
                                    onClick={() => toggleLink(link3.title)}
                                    className="my-3 ml-4 flex w-min cursor-pointer whitespace-nowrap p-2 transition-all duration-500"
                                  >
                                    {link3.title}
                                  </a>
                                );
                              })}
                          </div>
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </div>
      <div
        className="h-full w-[20%]"
        onClick={(prev) => setSmsidemenu(!prev)}
      ></div>
    </div>
  );
};

export default Sidenav;
