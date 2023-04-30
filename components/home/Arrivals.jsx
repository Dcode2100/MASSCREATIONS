import React from 'react'
import GiMoebiusStar from "react-icons/gi"
const arrivals = () => {
  return (
    <>
      <section className = "arrivals">
          <div className = "container">
               <div className= "heading d_flex">
                    <div className = "heading-left row f_flex">
                         <GiMoebiusStar/>
                         <h2>New Arrivals</h2>
                    </div>
                    <div className = "heading-right row">
                         <span>view all</span>
                    </div>
                    
               </div>

          </div>
      </section>
    </>
  )
}

export default arrivals
