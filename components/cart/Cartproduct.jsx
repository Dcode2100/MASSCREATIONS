import React from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import Cartheadermsg from "./Cartheadermsg";
import Typography from "@mui/material/Typography";

import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";

const Cartcards = ({ product }) => {
  const dispatch = useDispatch();
  // Function to handle the card click
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <div className="my-4 flex h-[6rem]  justify-between border-2">
      <div className="relative aspect-video w-[8rem]">
        <Image
          src="/stock/shoppingcart.jpg"
          className="object-cover absolute inset-0 "
          width={100}
          height={100}
          quality={100}
          priority
          alt="anyimg"
        />
      </div>

      <div
        className="ml-4 w-full 
       uppercase "
      >
        <h1 className="whitespace-nowrap text-[1rem] font-medium">
          {product.title}
        </h1>
        <div className="flex gap-[5%] font-bold">
          <Typography variant="body2" className="relative whitespace-nowrap">
            RS. 231/-
          </Typography>
          <Typography
            variant="body2"
            sx={{ textDecoration: "line-through" }}
            className="relative  text-blue-600"
          >
            RS.5412/-
          </Typography>
          <Typography variant="body2" className="relative   text-green-600">
            save 45%
          </Typography>
        </div>
        <h3 className="text-[0.8rem]">Size: Free Size</h3>
        <div className="quantremove-button flex w-[70%] justify-between">
          <div>
            <Button>Number</Button>
          </div>
          <button
            className="font-bold text-gray-500 underline underline-offset-4 "
            onClick={() => handleRemoveFromCart(product)}
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

const Cartproduct = ({ product }) => {
  return (
    <React.Fragment>
      <div className="mb-3">
        <Cartheadermsg />
      </div>

      <div className="mx-3 ">
        {product.map((product) => (
          <div key={product.id}>
            <Cartcards product={product} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Cartproduct;
