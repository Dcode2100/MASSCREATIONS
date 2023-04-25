import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { navlinks } from "../common";

type Props = {
  setSmsidemenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidenav = ({ setSmsidemenu }: Props) => {
  const [openLinks, setOpenLinks] = useState<string[]>([]);

  const toggleLink = (link: string) => {
    if (openLinks.includes(link)) {
      setOpenLinks(openLinks.filter((l) => l !== link));
    } else {
      setOpenLinks([...openLinks, link]);
    }
  };

  return (
    <>
      <div
        className={`sidenav duration-5000 absolute z-10 h-[calc(100vh_-_3rem)] w-[80%] transform overflow-scroll bg-white bg-opacity-95 transition-all ease-linear`}
      >
        <div className="sidenav__header ">
          <div className="sidenav__header__logo flex w-full justify-between px-5 pt-3">
            <h1 className=" text-[1.7rem]">KEYPINI</h1>

            <button
              onClick={() => {
                setSmsidemenu((prev: any) => !prev);
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
              <h2 className="font-medium max-xs:hidden md:hidden">CLOSE</h2>
            </button>
          </div>
        </div>
        <div className="sidenav__body ml-3 mt-8 text-[1.2rem]">
          {navlinks.map((link1, index1) => {
            const isOpen = openLinks.includes(link1.title);
            return (
              <div key={index1} className="">
                <h1
                  className="my-2 cursor-pointer"
                  onClick={() => toggleLink(link1.title)}
                >
                  {link1.title}
                </h1>
                
                {isOpen &&
                  link1.submenu?.map((link2, index2) => {
                    const isOpen = openLinks.includes(link2.title);
                    return (
                      <div key={index2} className="bg-blue-600">
                        <h2 className="my-2">{link2.title}</h2>
                        {isOpen &&
                          link2.dubmenu?.map((link3, index3) => {
                            return (
                              <div
                                key={index3}
                                onClick={() => toggleLink(link3.title)}
                                className="my-2"
                              >
                                {link3.title}
                              </div>
                            );
                          })}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidenav;
