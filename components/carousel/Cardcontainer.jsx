import React from "react";
import Cardcopy from "./Cardcopy";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = ({ carddata, settings }) => {
  return (
    <Slider {...settings} className="w-[80%] m-auto">
      <Cardcopy carddata={carddata[0]} />
      <Cardcopy carddata={carddata[1]} />
      <Cardcopy carddata={carddata[2]} />
      <Cardcopy carddata={carddata[3]} />
      <Cardcopy carddata={carddata[4]} />
      <Cardcopy carddata={carddata[5]} />
      <Cardcopy carddata={carddata[6]} />
    </Slider>
  );
};

export default Carousel;
