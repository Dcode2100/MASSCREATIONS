import React from "react";

const Menutoggle = ({ items, index, setDrop }) => {
  return (
    <div
      className="relative h-full w-full  whitespace-nowrap px-8 xs:hidden"
      onMouseEnter={() => {
        items.submenu && setDrop(index);
      }}
      onMouseLeave={() => {
        items.submenu && setDrop(null);
      }}
    >
      <a
        key={index}
        className="h-full w-full flex items-center justify-center text-md text-black"
        href={items.path}
      >
        {items.title}
      </a>
    </div>
  );
};

export default Menutoggle;
