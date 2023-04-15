import React, { useState } from "react";
import Percentoff from "./Percentoff";

const navlinks = [
  { title: "HOME", path: "/" },
  {
    title: "PRODUCTS",
    path: "/about",
    submenu: [
      {
        heading: "RSS Party",
        dubmenu: [
          { title: "OUR STORY", path: "/about" },
          { title: "MISSION & VISION", path: "/missionvision" },
          { title: "OBJECTIVE", path: "/objective" },
          { title: "LEADERSHIP", path: "/leadership" },
        ],
      },

      {
        heading: "MEDIA",
        dubmenu: [
          { title: "GALLERY", path: "/gallery" },
          { title: "NEWS ARTICLES", path: "/newsarticles" },
          { title: "PRESS RELEASE", path: "/pressrelease" },
        ],
      },

      {
        heading: "OUR WINGS",
        dubmenu: [
          { title: "KISAN", path: "/wing/kisan" },
          { title: "MAHILA", path: "/wing/mahila" },
          { title: "YUVA", path: "/wing/yuva" },
          { title: "S.C", path: "/wing/sc" },
          { title: "S.T", path: "/wing/st" },
          { title: "OBC", path: "/wing/obc" },
          { title: "MINORITY", path: "/wing/minority" },
        ],
      },
    ],
  },
  {
    title: "SERVICE",
    path: "/becomeamember",
    submenu: [
      {
        heading: "JOIN THE MOMENT",
        dubmenu: [
          {
            title: "BECOME A MEMBER",
            path: "/becomeamember",
            hovermenu: [
              {
                title: "Perks of becoming a member",
                para: " good thing and good things",
                img: "https://www.shutterstock.com/image-photo/keep-simple-word-wooden-blocks-260nw-1604630542.jpg",
              },
            ],
          },
          {
            title: "BECOME A VOLUNTEER",
            path: "/becomeavolunteer",
            hovermenu: [
              {
                title: "Perks of becoming a volunteer",
                para: " good things",
                img: "https://www.shutterstock.com/image-photo/keep-simple-word-wooden-blocks-260nw-1604630542.jpg",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "CONTACT US",
    path: "/contact",
  },
];

const Header = () => {
  const [dropdown, setDropdown] = useState(null);
  return (
    <div>
      <div className="Header relative  flex h-[3.5rem] items-center justify-between bg-green-300">
        <div className="ml-8 w-min  pr-1 text-2xl text-black">KEYPINI</div>
        <div className="links flex h-full list-none items-center gap-14  ">
          {navlinks.map((link, index) => (
            <a
              key={index}
              className="li-center text-[0.9rem] relative cursor-pointer text-blue-800  h-full flex items-center justify-center hover:underline "
              href={link.link}
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="mr-8  flex w-min gap-3">
          <button className="transition-all hover:scale-110">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1.3em"
              width="1.3em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="transition-all hover:scale-110">
            {" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1.3em"
              width="1.3em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
