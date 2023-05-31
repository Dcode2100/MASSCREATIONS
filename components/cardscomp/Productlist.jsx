import React from "react";
import Productcard from "../cardscomp/Productcard";

const Productlist = ({ data }) => {
  console.log(data);
  return (
    <div className=" w-[80%] m-auto relative flex my-12 flex-wrap">
      {data.map((card) => (
        <div key={card.id} className="flex-wrap w-1/4 ">
          <Productcard carddata={card} />
        </div>
      ))}
    </div>
  );
};

export default Productlist;
