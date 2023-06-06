import { Close } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { BiCross } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeCart } from "../../features/cart/cartSlice";
import Cartproduct from "./Cartproduct";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const handleCloseCart = () => {
    dispatch(closeCart());
  };

  return (
    <div className={`right-0 top-0 h-[100vh] w-[27rem] bg-blue-600 `}>
      <Box
        sx={{ width: "100%" }}
        className="flex justify-between bg-yellow-300 py-3 "
      >
        <h2 className="pl-4 text-2xl">CART</h2>
        <RxCross2
          className="mr-3 cursor-pointer text-3xl"
          onClick={handleCloseCart}
        />
      </Box>
      <Box className="p-3 pt-5">
        {products.map((product) => (
          <div key={product.id}>
            <Cartproduct product={product} />
          </div>
        ))}
      </Box>
    </div>
  );
};

export default Cart;
