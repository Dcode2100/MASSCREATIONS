import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  // autoplay: true,
  // autoplaySpeed: 3000,
  Slider: "power4.inOut",
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  
};

const Headertop = () => {
  return (
    <div
      className={`relative  flex h-[2rem] items-center justify-center bg-green-600 px-4 transition-all duration-500 `}
    >
      <div className={`duration-600 relative w-[100%]`}>
        <Slider {...settings}>
          <div className=" w-full text-center">
            <h3 className="max-xs:text-[0.8rem]">
              The sale is on check out the latest offers in all our sections
            </h3>
          </div>
          <div className=" w-full text-center ">
            <h3 className="max-xs:text-[0.8rem]">
              Checkout the latest deals going on
            </h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Headertop;
