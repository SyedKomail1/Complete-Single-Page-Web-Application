import { Button, Grid } from "@material-ui/core";
import React from "react";
import productService from "./services/ProductsService";
import { withRouter } from "react-router";
const SingleProduct = (props) => {
  const { product, onDelete, history } = props;
  console.log(props);
  return (
    <Grid item xs={3}>
      <h2>
        {product.name}
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            console.log("navigate to update");
            history.push("/products/update/" + product._id);
          }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => {
            productService
              .deleteProduct(product._id)
              .then((data) => {
                console.log(data);
                onDelete();
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Delete
        </Button>
      </h2>
      <h2> {product.price}</h2>
      <hr />
    </Grid>
  );
};

export default withRouter(SingleProduct);
