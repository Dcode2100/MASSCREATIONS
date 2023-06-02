import React from "react";

const cart = () => {
  const [cartdata,setCartdata]=useState({})
  return (
    <React.Fragment>
    { cartactive && 
    <div className="m-auto flex  w-[85%] gap-4 bg-black">
      <div className="left flexc h-96 w-[60%] bg-blue-400">
        <h1>ADD TO CART</h1>
      </div>
      <div className="right flexc h-96 w-[40%] bg-green-400">
        payment gateway
      </div>
    </div>}
    </React.Fragment>
  );
};

export default cart;
