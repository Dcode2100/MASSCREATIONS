import React, { useEffect } from "react";

const Dropdown = ({ items }) => {
  return (
    <div className="dropdown duration-600 absolute z-10 flex h-min w-full justify-center gap-10 bg-gray-300 px-40 py-12 pb-16 ">
      {items.submenu &&
        items.submenu.map((sub, index) => {
          return (
            <div
              key={index}
              className="categories-link w-min whitespace-nowrap  px-6 "
            >
              <h3 className="mb-4 text-[1.3rem] text-black">{sub.title}</h3>
              {sub.dubmenu &&
                sub.dubmenu.map((dub, index) => {
                  return (
                    <div key={index} className="">
                      <a
                        className="text-[0.85rem] text-gray-500 transition-all hover:text-black"
                        href={dub.path}
                      >
                        {dub.title}
                      </a>
                    </div>
                  );
                })}
            </div>
          );
        })}
      <div>
        <h1 className="ml-20 flex h-[10rem] bg-yellow-300">
          <img className="" src="/sample/samp1.jpg" alt="sampleimages"></img>
        </h1>
      </div>
    </div>
  );
};

export default Dropdown;
