import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const HeroSection = () => {
  return (
    // Your JSX (converted HTML) code here
    <React.Fragment>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="myswiper swiper-wrapper "
      >
        <SwiperSlide className="main swiper-slide" id="glacier">
          <div className="left-side">
            <div className="main-wrapper">
              <h3 className="main-header">Closca Bottle</h3>
              <h1 className="main-title">Glacier</h1>
              <h2 className="main-subtitle">€ 39.90</h2>
            </div>
            <div className="main-content">
              <div className="main-content__title">
                Glaciers contain 75% of the World's freshwater
              </div>
              <div className="main-content__subtitle">
                The effects of melting ice glaciers are biodiversity loss, the
                rising of the sea level and the deficiency of freshwater, among
                others.
              </div>
              <div className="more-menu">
                Shop Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.7"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="-5" y1="12" x2="19" y2="12" />
                  <line x1="15" y1="16" x2="19" y2="12" />
                  <line x1="15" y1="8" x2="19" y2="12" />
                </svg>
              </div>
            </div>
          </div>
          <div className="center">
            <img className="bottle-img transp " src="MC_27/MC-1.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="main swiper-slide" id="coral">
          <div className="left-side">
            <div className="main-wrapper">
              <h3 className="main-header">Closca Bottle</h3>
              <h1 className="main-title">Coral</h1>
              <h2 className="main-subtitle">€ 39.90</h2>
            </div>
            <div className="main-content">
              <div className="main-content__title">
                We will have lost 60% of our coral reefs by 2030.
              </div>
              <div className="main-content__subtitle">
                Coral reefs are essential to humans, as they protect the
                shorelines and are a source of nutrients and habitat for
                thousands of marine species.
              </div>
              <div className="more-menu">
                Shop Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.7"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="-5" y1="12" x2="19" y2="12" />
                  <line x1="15" y1="16" x2="19" y2="12" />
                  <line x1="15" y1="8" x2="19" y2="12" />
                </svg>
              </div>
            </div>
          </div>
          <div className="center">
            <img className="bottle-img" src="MC_27/MC-4.png" />
          </div>
        </SwiperSlide>
      </Swiper>
     
      <div className="swiper-pagination"></div>
    </React.Fragment>
  );
};

export default HeroSection;
