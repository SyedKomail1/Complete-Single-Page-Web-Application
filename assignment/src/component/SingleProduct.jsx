import { Grid } from "@material-ui/core";
import React from "react";

const SingleProduct = ({ product }) => {
  return (
    <Grid item xs={3}>
      <h2> {product.name}</h2>
      <h2> {product.price}</h2>
      <hr />
    </Grid>
  );
};

export default SingleProduct;
