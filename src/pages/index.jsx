import HeroSection from "../../components/home/HeroSection";
import Arrivals from "../../components/home/Arrivals";
import React from "react";
import { useRouter } from "next/router";
function index() {
  return (
    <div className="index-wrapper">
      <HeroSection />
      <Arrivals />
    </div>
  );
}

export default index;
