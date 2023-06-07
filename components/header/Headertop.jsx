import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  //   autoplay: true,
  Slider: "power4.inOut",
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Headertop = () => {
  const [isHeaderTopVisible, setIsHeaderTopVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsHeaderTopVisible(scrollTop <= 0);
    };
    // the window is given the scroll event listener and if there is scroll then execute the handleScroll function,

    window.addEventListener("scroll", handleScroll);
    // return the window with the scroll event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`relative  flex items-center justify-center bg-green-600 px-4 transition-all duration-500 headertop-visible`}>
      <div className=" relative w-[100%] ">
        <Slider {...settings}>
          <div className=" w-full text-center">
            <h3 className="max-xs:text-[0.8rem]">
              The sale is on check out the latest offers in all our sections
            </h3>
          </div>
          <div className=" w-full text-center">
            <h3>Checkout the latest deals going on</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Headertop;
