import React from "react";
import Productcard from "../cardscomp/Productcard";

const Productlist = ({ data }) => {
  return (
    <div className=" relative m-auto  flex w-[80%] flex-wrap">
      {data.map((card) => (
        <div key={card.id} className="w-1/4 flex-wrap ">
          <Productcard carddata={card} />
        </div>
      ))}
    </div>
  );
};

export default Productlist;
