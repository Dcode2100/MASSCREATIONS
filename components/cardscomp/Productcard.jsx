import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart, total} from "../../features/cart/cartSlice";

const Productcard = (carddata) => {
  const { id,Images, alt, title, rating, price } =
    carddata.carddata;
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
    dispatch(total());
  }
  
  return (
    <Card className="relative border-2  object-contain px-6 py-6">
      <div className="mb-3 flex justify-between">
        <Typography variant="body2">LABEL</Typography>
        <Rating
          name="read-only"
          style={{ fontSize: "15px" }}
          value={rating}
          readOnly
        />
      </div>
      <CardMedia
        component="img"
        image={Images}
        alt={alt}
        className="m-auto h-[11rem] w-[100%] object-contain object-center "
      />
      <div className="mb-1 mt-3 w-full">
        <Typography variant="h6" className="relative  w-full pl-1">
          {title}
        </Typography>
      </div>
      <div className="mb-3 flex ">
        <Typography variant="body2" className="relative  w-full pl-1">
          RS. {price}/-
        </Typography>
        <Typography
          variant="body2"
          sx={{ textDecoration: "line-through" }}
          className="relative  w-full pl-1 text-blue-600"
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
        sx={{ "&:hover": { backgroundColor: "#000000" } }}
        className="border-3 hover:bg w-full border-blue-600 bg-black text-white"
        onClick={() => addProduct(carddata.carddata)}
      >
        Add to cart
      </Button>
    </Card>
  );
};

export default Productcard;
