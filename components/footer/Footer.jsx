import React, { useState, useEffect } from "react";
import FooterButton from "../common/Footerbutton";

const footerlinks1 = [
  {
    title: "NEED HELP",
    sublinks: [
      { title: "Track Your Order", link: "/ordertracking" },
      { title: "Returns & Exchanges", link: "/returns" },
      { title: "Shipping & Delivery", link: "/shipping" },
      { title: "Contact Us", link: "/contact" },
      { title: "FAQs", link: "/faqs" },
    ],
  },
  {
    title: "COMPANY",
    sublinks: [
      { title: "About Us", link: "/about" },
      { title: "Careers", link: "/careers" },
      { title: "Blog", link: "/blog" },
      { title: "Gift Card", link: "/giftcard" },
    ],
  },
  {
    title: "BE A PART OF US",
    sublinks: [
      { title: "Join our newsletter for latest design updates and arrivals" },
      { button: "Footerbutton" },
    ],
  },
  {
    title: "CONTACT US",
    sublinks: [
      {
        title: "Email - dcode2100@gmail.com",
        link: "mailto:dcode2100@gmail.com",
      },
      { title: "Ph no - 7678096369" },
      { title: "Timing - 10AM-8PM" },
    ],
  },
];

const Footer = () => {
  useEffect(() => {
    console.log(footerlinks1.sublinks);
  }, []);
  return (
    <div className="h-min bg-gray-900 text-gray-500">
      <div className="mx-auto px-4 ">
        <div className=" py-5 bg-blue-500 grid-col-4 container mx-auto w-min grid-flow-row ">
          {/* This is array of nested object and array  */}
          {footerlinks1.map((footerlink, index) => {
            return (
              <div key={index} className="text-xs text-white">
                <h1 className="text-xl font-bold">{footerlink.title}</h1>
                {footerlink.sublinks &&
                  footerlink.sublinks.map((sublink, index) => {
                    return (
                      <ul key={index}>
                        <li  href={sublink.link}>
                          {sublink.title}
                        </li>
                      </ul>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
