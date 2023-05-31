import React from "react";
import Productlist from "../../../components/cardscomp/Productlist";

const cardinfo = [
  // add data like name photo description
  {
    id: 1,
    name: "elephant",
    photo: "/Sample/samp1.jpg",
    price: 1000,
    description:
      " a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description.",
    alt: "elephant",
    value: 4,
  },
  {
    id: 2,
    name: "deer",
    photo: "/Sample/samp2.jpg",
    price: 1000,
    description:
      " a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description.",
    alt: "deer",
    value: 4,
  },
  {
    id: 3,
    name: "horse",
    photo: "/Sample/samp3.jpg",
    price: 1000,
    description:
      " a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description.",
    alt: "horse",
    value: 2,
  },
  {
    id: 4,
    name: "dog",
    photo: "/Sample/samp4.jpg",
    price: 1000,

    description:
      " a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description.",
    alt: "dog",
    value: 3,
  },
  // add more of this objects below
  {
    id: 5,
    name: "elephant",
    photo: "/Sample/samp5.jpg",
    price: 1000,
    description:
      " a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description.",
    alt: "elephant",
    value: 4,
  },
  {
    id: 6,
    name: "deer",
    photo: "/Sample/samp7.jpg",
    price: 1000,
    description:
      " a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description.",
    alt: "deer",
    value: 4,
  },
  {
    id: 7,
    name: "horse",
    photo: "/Sample/samp8.jpg",
    price: 1000,
    description:
      " a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description.",
    alt: "horse",
    value: 4,
  },
  {
    id: 8,
    name: "dog",
    price: 1000,
    photo: "/Sample/samp9.jpg",
    description:
      " a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description.",
    alt: "dog",
    value: 4,
  },
];


const metal = () => {
  return (
    <div>
      <Productlist data={cardinfo} />
    </div>
  );
};

export default metal;
