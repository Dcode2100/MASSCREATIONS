import Herosection from "../../components/home/Herosection";
import Arrivals from "../../components/home/Arrivals";
import Cart from "../../components/cart/Cart";
import React from "react";
import { useSelector } from "react-redux";



function index() {
  const isOpen = useSelector((state) => state.cart.isOpen);
  return (
    <div>
      <Herosection />
      {isOpen && <Cart />}
      <Arrivals />
    </div>
  );
}

export default index;
