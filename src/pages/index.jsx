import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import Herosection from "../../components/home/Herosection";
import React from "react";

function index() {
  const [categories, setCategories] = useState([]);

  return (
    <div className="wrapper h-min">
     <Herosection />
    </div>
  );
}

export default index;
