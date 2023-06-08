import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import CardMedia from "@mui/material/CardMedia";
import Cartheadermsg from "./Cartheadermsg";
const Cartcards = ({ product }) => {
  // Function to handle the card click
  const handleCardClick = () => {
    // Implement the desired functionality here
    console.log("Card clicked:", product.id);
  };
console.log(product);
  return (
    <Box className="flex ">
      <div className="relative h-12 w-4">
       <h1>{product.title}</h1>
      </div>
      
    </Box>
  );
};

const Cartproduct = ({ product }) => {
  
  return (
    <React.Fragment>
      <div className="mb-8">
        <Cartheadermsg />
      </div>

      <div className="m-auto w-[90%] bg-blue-500">
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
