import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import CardMedia from "@mui/material/CardMedia";

export const Cartcards = ({ product }) => {
  return (
    <Box className="flex items-center justify-between border-2 border-gray-600 px-4 py-3">
      <div className="flex items-center">
        <Image src={product.images}/>
      </div>
      <div className="border-2 border-blue-600">{product.title}</div>
    </Box>
  );
};

export const subtotal = () => {
  return (
    <Box className="flex items-center justify-between px-4 py-3">
      <h2 className="text-[0.8rem]">Subtotal (0 items):</h2>
      <h2 className="text-[0.8rem]">$0.00</h2>
    </Box>
  );
};

const Cartproduct = ({ product }) => {
  console.log(product);
  return (
    <div className="border">
      <subtotal />
      <div>
        {product.map((product) => (
          <div key={product.id}>
            <Cartcards product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cartproduct;
