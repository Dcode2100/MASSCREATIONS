import React, { useState, useEffect } from "react";
import FooterButton from "../common/Footerbutton";
import Link from "next/link";
import {AiOutlineCopyright} from "react-icons/ai"
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
    <div className="footer-container bg-gray-900  ">
      <div className=" flex h-min items-center justify-center  ">
        <div className="flex w-[90%] flex-wrap justify-between gap-9 pb-20 pt-7 ">
          {/* This is array of nested object and array  */}
          {footerlinks1.map((footerlink, index) => {
            return (
              <div key={index} className=" w-min whitespace-nowrap text-white">
                <h1 className=" mb-3 text-xl font-bold ">{footerlink.title}</h1>
                {footerlink.sublinks &&
                  footerlink.sublinks.map((sublink, index) => {
                    return (
                      <ul key={index}>
                        <a
                          className="cursor-pointer text-[0.8rem] text-gray-400 transition-all hover:text-white"
                          href={sublink.link}
                        >
                          {sublink.title}
                        </a>
                      </ul>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="copyright bg-dark-blue flex h-min w-min items-center whitespace-nowrap pb-6 pl-6 text-[0.8rem] text-gray-300 ">
        <AiOutlineCopyright />{" "}
        <p className=" ml-1 text-gray-300">2022-2023 KEIPAL | ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;
