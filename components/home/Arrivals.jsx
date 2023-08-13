import React, { useEffect } from "react";
import { GiMoebiusStar } from "react-icons/gi";
import { supabase } from "../../lib/supabaseClient";
import LatestProductFetch from "@/services/LatestProductFetch";
// always destructure when importing from react-icons

async function fetchData() {

let { data, error } = await supabase.from("product").select("*");

  console.log(data);
}

const arrivals = () => {
  return (
    <div>
      <section className="arrivals">
        this is arrival section
        <LatestProductFetch />
        <button onClick={fetchData}>fetchData</button>
      </section>
    </div>
  );
};

export default arrivals;
