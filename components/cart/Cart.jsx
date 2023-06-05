import { Close } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { BiCross } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeCart } from "../../features/cart/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const handleCloseCart = () => {
    dispatch(closeCart());
  };
   const isOpen = useSelector((state) => state.cart.isOpen);
  return (
    <div
      className={`w-[27rem] right-0 top-0 h-[100vh] bg-blue-600 `}
    >
      <Box
        sx={{ width: "100%" }}
        className="flex justify-between bg-yellow-300 py-3 "
      >
        <h2 className="pl-4 text-2xl">CART</h2>
        <RxCross2 className="mr-3 text-3xl cursor-pointer" onClick={handleCloseCart} />
      </Box>
      <Box className="p-3 pt-5 ">
        {products.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        )}
      </Box>
    </div>
  );
};

export default Cart;
