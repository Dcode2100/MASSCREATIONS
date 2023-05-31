import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMore, { Tag } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { Box, Button } from "@mui/material";

const Productcard = (carddata) => {
  const { id, photo, alt, name, description, price, value } = carddata.carddata;
  return (
    <Card className="relative border-2 border-blue-700 object-contain px-6 py-6">
      <div className="mb-3 flex justify-between">
        <Typography variant="body2">LABEL</Typography>
        <Rating
          name="read-only"
          style={{ fontSize: "15px" }}
          value={value}
          readOnly
        />
      </div>
      <CardMedia
        component="img"
        image={photo}
        alt={alt}
        className="m-auto h-[11rem] w-[100%] "
      />
      <div className="mb-1 mt-3 w-full">
        <Typography variant="h6" className="relative  w-full pl-1">
          {name}
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
        <Typography variant="body2" className="relative  text-green-600 w-full pl-1">
          save {40}%
        </Typography>
      </div>

      <Button
        variant="oultlined"
        sx={{ "&:hover": { backgroundColor: "#000000" } }}
        className="border-3 hover:bg w-full border-blue-600 bg-black text-white"
      >
        Add to cart
      </Button>
    </Card>
  );
};

export default Productcard;
