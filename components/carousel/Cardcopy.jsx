import React from "react";
import Image from "next/image";
import Buttonone from "../commoncomp/Buttonone";

const Cardcopy = ({ carddata }) => {
  return (
    // MAKE A CARD IN WHICH THERE IS 70 COVERED WITH PHOTO AND LATER HALF WITH NAME DESCRIPTION AND ADD TO TO CART BUTTON AT BOTTOM
    <div className="relative h-[calc(100vh_-_15rem)] w-[100%]  p-5">
      <div className="h-full  relative  ">
        <Image
          className="absolute h-full w-full object-cover "
          src={carddata.photo}
          fill
          quality={100}
          priority
          alt="sampleimage"
          sizes="(max-width: 768px) height:100%,
              (max-width: 1200px) height:100%,
              33vw"
        />
        <div className="absolute bottom-0 right-0 flex h-[80%] w-full flex-col items-end justify-end bg-gradient-to-b from-transparent to-black p-8 text-white opacity-[100%] ">
          <h1 className="mb-4 text-3xl font-bold uppercase ">
            {carddata.name}
          </h1>
          <p
            className="pb-5 text-justify text-[1rem] font-light
           leading-[1rem] tracking-[-0.6px] text-gray-300 opacity-80 "
          >
            {carddata.description}
          </p>
        </div>
        <Buttonone title={"SHOP NOW"} />
      </div>
    </div>
  );
};

export default Cardcopy;
