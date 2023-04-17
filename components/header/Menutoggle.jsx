import React from 'react'

const Menutoggle = ({index, items, setDrop}) => {
  return (
    <div
        className=""
      onMouseEnter={() => {
        items.submenu && setDrop(index);
        console.log(index);
      }}
      onMouseLeave={() => {
        items.submenu && setDrop(null);
        console.log("leave");
      }}
      
    >
      <a
        key={index}
        className="li-center relative flex h-full cursor-pointer  items-center justify-center text-[0.9rem] text-blue-800 hover:underline "
        href={items.path}
      >
        {items.title}
      </a>
    </div>
  );
}

export default Menutoggle