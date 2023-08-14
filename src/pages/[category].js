import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Productlist from "../../components/cardscomp/Productlist";
import { supabase } from "../../lib/supabaseClient";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeCart } from "../../features/cart/cartSlice";
const DynamicCategory = ({ product, error }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { category } = router.query; // Access the value of the 'category' parameter
  const isOpen = useSelector((state) => state.cart.isOpen);
  const handleCloseCart = () => {
    dispatch(closeCart());
  };
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="relative">
      <div
        className={`cover absolute z-[-1] h-[100%] w-[100%] opacity-30 transition-colors duration-500 ${
          isOpen ? " z-[1] bg-slate-700 " : ""
        }`}
        onClick={handleCloseCart}
      ></div>
      <h1 className="  flex items-center  justify-center pb-4 pt-4 text-3xl uppercase text-center">
        {category} Keychains
      </h1>
      <div className="pb-8">
        <Productlist data={product} />
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const { category } = query;

  try {
    const { data: product, error } = await supabase
      .from("product")
      .select("*")
      .eq("category", category);

    return {
      props: {
        product,
        error,
      },
    };
  } catch (error) {
    return {
      props: {
        error: {
          message: error.message,
        },
      },
    };
  }
}

export default DynamicCategory;
