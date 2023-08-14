import React from "react";
import Productcard from "../cardscomp/Productcard";
import Grid from "@mui/material/Grid";

const Productlist = ({ data }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {data.map((card) => (
        <Grid key={card.id} item>
          <Productcard carddata={card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Productlist;
