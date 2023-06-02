import React from "react";
import Productcard from "../cardscomp/Productcard";

const Productlist = ({ data }) => {
  return (
    <React.Fragment>
      <div className=" relative m-auto mb-8 flex w-[80%] flex-wrap">
        {data.map((card) => (
          <div key={card.id} className="w-1/4 flex-wrap ">
            <Productcard carddata={card} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Productlist;
