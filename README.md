1. supabase setup - is using preconfig client for nextjs
2. switch off row level security or switch on and provide policy or that array will be empty


3. supabase fetch method  useEffect(() => {

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

5. Error occured in the Card component everything was normal tried to reconfig next.config file but even after decleraing hot reload false didn't worked got solved after copying content of the component to a fresh new component with different name then card.





      {carddata.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.photo} alt={card.alt} />
          <div className="card-info">
            <h2>{card.name}</h2>
            <p>{card.description}</p>
            <h3>{card.price}</h3>
          </div>
        </div>
      ))}


6. After some reseach on redux toolkit and react context Api the final decision is to use redux toolkit since there is multiple UI toggling and the same state and data is being passed to different component of cart, and to maintain the logic and data of Unique user and their cart values redux will be better option. 