import React from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import Cartheadermsg from "./Cartheadermsg";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  addToCart,
  total,
} from "../../features/cart/cartSlice";

const Cartcards = ({ product }) => {
  const dispatch = useDispatch();
  // Function to handle the card click
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(total());
  };

  // Function to handle removing a product from the cart
  const handleIncrementQuantity = () => {
    dispatch(incrementQuantity(product));
    dispatch(total());
  };
  const handleDecrementQuantity = () => {
    dispatch(decrementQuantity(product));
    dispatch(total());
  };

  // Function to handle completely removing a product from the cart
  const handleRemoveProductCompletely = () => {
    dispatch(removeItem(product));
    dispatch(total());
  };
  console.log(product.price);
  return (
    <div className="relative my-4 flex  h-[8rem] justify-between  ">
      <div className="relative aspect-video w-[30%] object-contain">
        <Image
          src={product.images}
          className="absolute inset-0 h-[80%] w-[100%] object-contain "
          fill
         sizes="(max-width: 768px) height:100%,"
          quality={100}
          priority
          alt="anyimg"
        />
      </div>

      <div
        className=" flex h-full
       w-[67%] flex-col  gap-1   "
      >
        <h1 className="whitespace-nowrap text-[1.1rem] font-medium uppercase text-slate-700">
          {product.title}
        </h1>
        <div className="flex gap-[5%] font-bold">
          <Typography variant="body2" className="relative whitespace-nowrap">
            {` Rs. ${product.price}.0`}
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
        <div className="quantremove-button mt-2 flex w-[70%] justify-between gap-8">
          <div className=" flex items-center ">
            <button
              className="aspect-square w-9 bg-slate-300 transition-colors duration-200 hover:bg-slate-400 "
              onClick={handleIncrementQuantity}
            >
              +
            </button>
            <h3 className="flex aspect-square w-9 items-center justify-center text-black ">
              {product.quantity}
            </h3>
            <button
              className="aspect-square w-9 bg-slate-300 transition-colors duration-200 hover:bg-slate-400"
              onClick={handleDecrementQuantity}
            >
              -
            </button>
          </div>
          <button
            className="font-semibold text-gray-500 underline underline-offset-4 transition-all  duration-200 hover:scale-105 hover:text-slate-600"
            onClick={handleRemoveProductCompletely}
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

const Cartproduct = () => {
  const products = useSelector((state) => state.cart.cartlist);
  const totalprice = useSelector((state) => state.cart.total);
  console.log(totalprice);
  return (
    <div className="relative flex  min-h-full flex-col justify-between ">
      <div className=" mb-4">
        <div className="mb-3">
          <Cartheadermsg />
        </div>

        <div className="mx-3 ">
          {products
            ? products.map((product) => (
                <div key={product.id}>
                  <Cartcards product={product} />
                </div>
              ))
            : console.log("product is not defined")}
        </div>
      </div>
      <div className="flex-end relative flex  h-min w-full justify-between border-t-2 border-slate-400">
        <div className=" m-auto my-4 flex w-[88%] flex-col gap-3">
          <h3 className="text-xs font-light">
            Shipping & taxes calculated at checkout
          </h3>
          <div className="flex items-center  justify-between ">
            <h2 className="flex h-min items-center justify-center text-lg font-thin">
              Subtotal:
            </h2>
            <h2 className=" flex items-center justify-center pr-5 text-lg font-thin">
              {`Rs. ${totalprice}.0`}
            </h2>
          </div>
          <button className=" bg-black p-2 text-white transition-all duration-300 hover:scale-[1.02]">
            <h1 className="text-lg font-normal">Place Order</h1>
            <h2 className="text-xs">Save up to 100/- on prepaid orders</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartproduct;
