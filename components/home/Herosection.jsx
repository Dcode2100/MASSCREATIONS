import React from "react";
import Cardcontainer from "../carousel/Cardcontainer";

const carddata = [
  // add data like name photo description
  {
    id: 1,
    name: "elephant",
    photo: "/Sample/samp1.jpg",

    description:
      " a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description.",
    alt: "elephant",
  },
  {
    id: 2,
    name: "deer",
    photo: "/Sample/samp2.jpg",

    description:
      " a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description.",
    alt: "deer",
  },
  {
    id: 3,
    name: "horse",
    photo: "/Sample/samp3.jpg",

    description:
      " a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description.",
    alt: "horse",
  },
  {
    id: 4,
    name: "dog",
    photo: "/Sample/samp4.jpg",
    description:
      " a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description.",
    alt: "dog",
  },
  // add more of this objects below
  {
    id: 5,
    name: "elephant",
    photo: "/Sample/samp5.jpg",
    description:
      " a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description.",
    alt: "elephant",
  },
  {
    id: 6,
    name: "deer",
    photo: "/Sample/samp7.jpg",
    description:
      " a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description.",
    alt: "deer",
  },
  {
    id: 7,
    name: "horse",
    photo: "/Sample/samp8.jpg",
    description:
      " a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description.",
    alt: "horse",
  },
  {
    id: 8,
    name: "dog",
    photo: "/Sample/samp9.jpg",
    description:
      " a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description.",
    alt: "dog",
  },
];

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute top-1/2  transform  ${className} fontsize-[2rem]`}
      style={{ display: "block", background: "green", left: "0" }}
      onClick={onClick}
    />
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute top-1/2 transform  ${className} `}
      style={{ ...style, display: "block", background: "red", right: "0" }}
      onClick={onClick}
    />
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  // arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Herosection = () => {
  return (
    <div className="h-[calc(100vh_-_9rem)] ">
      <Cardcontainer carddata={carddata} settings={settings} />
    </div>
  );
};

export default Herosection;
