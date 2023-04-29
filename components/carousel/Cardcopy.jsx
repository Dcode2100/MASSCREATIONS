import React from "react";
import Image from "next/image";

const Cardcopy = ({ carddata }) => {
  return (
    // MAKE A CARD IN WHICH THERE IS 70 COVERED WITH PHOTO AND LATER HALF WITH NAME DESCRIPTION AND ADD TO TO CART BUTTON AT BOTTOM
    <div className="relative bg-yellow-800 p-10">
      <div className="relative h-[5rem] w-full">
        <Image
          className="absolute object-contain"
          src={carddata.photo}
          fill
          quality={100}
          priority
          alt="sampleimage"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-black ">{carddata.name}</h1>
        <p className="text-sm">{carddata.description}</p>
        <button className="rounded-md bg-yellow-700  px-2 py-1 text-black">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Cardcopy;
