import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import Herosection from "../../components/home/Herosection";
import React from "react";

function index() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Fetch all categories and their associated products
      const { data: categoriesAndProducts, error } = await supabase
        .from("products")
        .select("*");

      if (error) {
        console.error(error);
        return;
      }

      const categoriesmap = {};

      // Process the results
      // const categoryMap = {};
      // categoriesAndProducts.forEach((row) => {
      //   // Create the category object if it doesn't exist
      //   if (!categoryMap[row.category_id]) {
      //     categoryMap[row.category_id] = {
      //       id: row.category_id,
      //       name: row.name,
      //       products: [],
      //     };
      //   }

      //   // Add the product to the category's products array
      //   categoryMap[row.category_id].products.push({
      //     id: row.id,
      //     name: row.name,
      //     description: row.description,
      //     price: row.price,
      //     image: row.image,
      //   });
      // });

      // // Convert the category map to an array
      // const categoryArray = Object.values(categoryMap);
      setCategories(categoriesAndProducts);
      console.log(categoriesAndProducts);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>My Ecommerce Store</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <h2>{category.name}</h2>
            <h1>update from abhishek</h1>
          </li>
        ))}
      </ul>
      <Herosection/>
      </div>
  );
    
    
}

export default index;
