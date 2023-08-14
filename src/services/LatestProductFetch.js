import React from "react";
import { supabase } from "../../lib/supabaseClient";

const LatestProductFetch = ({ products }) => {
  console.log(products);
  return (
    <div>
      <h2>Latest Products</h2>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            {/* Add other product information here */}
          </div>
        ))}
    </div>
  );
};

export default LatestProductFetch;

export async function getServerSideProps() {
  // Fetch data from the "product" table
  let { data: products, error } = await supabase
    .from("product")
    .select("*")
    .eq("rating", 5);

  if (products) {
    console.log("Products:", products);
  }
  if (error) {
    console.log("Error:", error);
  }

  return {
    props: {
      products, // Pass the fetched products as props
      error,
    },
  };
}
