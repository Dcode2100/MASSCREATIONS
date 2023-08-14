import React, { useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import LatestProductFetch from "@/services/LatestProductFetch";
import Productlist from "../cardscomp/Productlist";

const Arrivals = ({ products, error }) => {
  const [product, setProduct] = React.useState([]);
  useEffect(() => {
    async function getProducts() {
      let { data, error } = await supabase
        .from("product")
        .select("*")
        .eq("rating", 5); 
     setProduct(data);
   
    }
    getProducts();
  
  }, []);

  return (
    <div>
      <section className="arrivals">
        <h2 className="text-center py-4 max-xs:hidden">Best Selling Products</h2>
        <Productlist data={product} />
      </section>
    </div>
  );
};

export default Arrivals;
