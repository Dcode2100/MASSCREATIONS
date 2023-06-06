import React from "react";

const Cartproduct = ({product}) => {
  console.log(product);
  return (
    <div>
      <h1>{product.id}</h1>
    </div>
  );
};

export default Cartproduct;
