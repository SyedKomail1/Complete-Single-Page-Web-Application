import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import axios from "axios";
import productService from "./services/ProductsService";
import Auth from "./auth/Auth";

const NewProduct = (props) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  return (
    <Auth>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <h1> Add New Product </h1>
          <TextField
            label="name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="price"
            fullWidth
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs></Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              console.log("Send API Call to Add");
              productService
                .addProduct({ name, price })
                .then((data) => {
                  console.log(data);
                  props.history.push("/products");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Add Product
          </Button>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Auth>
  );
};

export default NewProduct;
