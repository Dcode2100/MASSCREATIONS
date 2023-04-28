import React from "react";
import Image from "next/image";


const Cards = ({carddata}) => {
    const {name,photo,description} = carddata;
  return (
    // MAKE A CARD IN WHICH THERE IS 70 COVERED WITH PHOTO AND LATER HALF WITH NAME DESCRIPTION AND ADD TO TO CART BUTTON AT BOTTOM
    <div className="flex flex-col justify-center items-center ">
      <div className="relative h-40 w-40">
        <Image className="absolute object-contain " href={photo} fill quality={100}/>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold text-black ">{name}</h1>
        <p className="text-sm">{description}</p>
        <button className="bg-green-500 text-white px-2 py-1 rounded-md">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
