import React from 'react'

const navitems = [
    {name: 'categories',}
]
const Dropdown = ({drop}) => {
  return (
    <div className="dropdown h-[50vh] bg-gray-400 text-black">
     
        {drop&&
          drop.map((item, index) => {
            return (
              <li className="box" key={index}>
                <h4 className="box-heading">{item.heading}</h4>
                <ul style={{ listStyle: "none" }}>
                  <li className="box-item-container" key={index}>
                    {item.dubmenu.map((itm, index) => {
                      return (
                        <li>
                          <a
                            className="box-items t3"
                            key={index}
                            href={itm.path}
                          >
                            {itm.title}
                          </a>
                        </li>
                      );
                    })}
                  </li>
                </ul>
              </li>
            );
          })}
    </div>
  );
}

export default Dropdown