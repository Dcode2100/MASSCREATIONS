import React from "react";
import { supabase } from "../../lib/supabaseClient";

const LatestProductFetch = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2>Latest Products</h2>
      {data &&
        data.map((product) => (
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
  let { data, error } = await supabase.from("product").select("*");

  if (data) {
    console.log("Products:", product);
  }
  if (error) {
    console.log("Error:", error);
  }

  return {
    props: {
      data, // Pass the fetched products as props
      error,
    },
  };
}
