import React from 'react'
import { GiMoebiusStar } from "react-icons/gi";
// always destructure when importing from reacticons


const arrivals = () => {
  return (
    <div>
      <section className="arrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <h2>New Arrivals</h2>
            </div>
            <GiMoebiusStar />
            <div className="heading-right row">
              <span>view all</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default arrivals
