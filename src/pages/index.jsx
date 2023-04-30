import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import Herosection from "../../components/home/Herosection";
import Arrivals from "../../components/home/Arrivals";

import React from "react";

function index() {
  return (
    <div>
      <Herosection />
      <Arrivals />
    </div>
  );
}

export default index;
