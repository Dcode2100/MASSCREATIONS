import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart, total} from "../../features/cart/cartSlice";
import { Label } from "@mui/icons-material";

const Productcard = (carddata) => {
  const { id,images, alt, title, rating, price } =
    carddata.carddata;
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
    dispatch(total());
  }
  
  return (
    <Card className="relative border-2 w-[300px] max-sm:w-[185px] object-cover px-5 py-4">
     
      <CardMedia
        component="img"
        image={images}
        alt={alt}
        className="m-auto h-[15rem] max-sm:h-[7rem] w-[100%] object-cover object-bottom "
      />
      
      <div className="mt-3">
      <div className="bg-green-700 w-min px-2 py-0.5  mb-2 text-[11px]" >LABEL</div>
        <Rating
          name="read-only"
          style={{ fontSize: "16px" }}
          value={rating}
          readOnly
        />  
      </div>
      <div className="mb-1  w-full">
        <Typography variant="h6" className="relative  w-full ">
          {title}
        </Typography>
      </div>
      <div className="mb-3 flex ">
        <Typography variant="body2" className="relative  w-full ">
          RS. {price}/-
        </Typography>
        <Typography
          variant="body2"
          sx={{ textDecoration: "line-through" }}
          className="relative max-sm:hidden w-full pl-1 text-blue-600"
        >
          RS. {price}/-
        </Typography>
        <Typography
          variant="body2"
          className="relative  w-full pl-1 text-green-600"
        >
          save {40}%
        </Typography>
      </div>
    

      <Button
        variant="oultlined"
        sx={{ "&:hover": { backgroundColor: "#000000",color:"white" } }}
        className="border-3 px-6 hover:bg w-full border-blue-600 bg-black max-sm:text-xs max-xs:py-2 text-white"
        onClick={() => addProduct(carddata.carddata)}
      >
        Add to cart
      </Button>
   
    </Card>
  );
};

export default Productcard;
