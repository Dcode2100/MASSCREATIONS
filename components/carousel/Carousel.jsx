import React from "react";
import Cards from "./cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carddata = [
  // add data like name photo description
  {
    id: 1,
    name: "elephant",
    photo:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    description: "elephant",
  },
  {
    id: 2,
    name: "deer",
    photo:
      "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    description: "deer",
  },
  {
    id: 3,
    name: "horse",
    photo:
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "horse",
  },
  {
    id: 4,
    name: "dog",
    photo:
      "https://cdn.pixabay.com/photo/2016/11/04/21/34/beach-1799006__480.jpg",
    description: "dog",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative  ">
      <Slider {...settings}>
        <div className="h-max ">
          <Cards carddata={carddata[0]} />
        </div>

        <div className="h-40 ">
          <Cards carddata={carddata[1]} />
        </div>

        <div className="h-40 ">
          <Cards carddata={carddata[2]} />
        </div>
        <div className="h-40 ">
          <Cards carddata={carddata[3]} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
