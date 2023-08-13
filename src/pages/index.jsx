import Herosection from "../../components/home/Herosection";
import Arrivals from "../../components/home/Arrivals";
import React from "react";
import { useRouter } from "next/router";
import LatestProductFetch from "../services/LatestProductFetch"

function index() {
  return (
    <div className="index-wrapper">
      <Herosection />
    
      <Arrivals />
    </div>
  );
}

export default index;
