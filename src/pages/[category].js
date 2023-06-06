import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Productlist from "../../components/cardscomp/Productlist";
import { supabase } from "../../lib/supabaseClient";

const DynamicCategory = ({ product, error }) => {
  const [cartactive, setCartactive] = useState(true);
  const router = useRouter();
  const { category } = router.query; // Access the value of the 'category' parameter

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="  mb-6 mt-6 flex items-center justify-center text-3xl">
        {category} Keychain Category
      </h1>
      <Productlist data={product} />
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const { category } = query;

  try {
    const { data: product, error } = await supabase
      .from("product")
      .select("*")
      .eq("category", category);

    return {
      props: {
        product,
        error,
      },
    };
  } catch (error) {
    return {
      props: {
        error: {
          message: error.message,
        },
      },
    };
  }
}

export default DynamicCategory;
