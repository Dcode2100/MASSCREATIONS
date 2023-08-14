import React from "react";

const Menutoggle = ({ items, index, setDrop }) => {
  return (
    <div
      className="menutoggle-a relative mx-8 h-full  max-md:hidden
      "
      onMouseEnter={() => {
        items.submenu && setDrop(index);
      }}
      onMouseLeave={() => {
        items.submenu && setDrop(null);
      }}
    >
      <a
        key={index}
        className=" text-md flex h-full items-center justify-center cursor-pointer text-black"
        href={items.path}
      >
        {items.title}
      </a>
    </div>
  );
};

export default Menutoggle;
