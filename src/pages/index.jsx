import Herosection from "../../components/home/Herosection";
import Arrivals from "../../components/home/Arrivals";
import React from "react";
import { useRouter } from "next/router";
function index() {
  return (
    <div className="">
      <Herosection />
      <Arrivals />
    </div>
  );
}

export default index;
