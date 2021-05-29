import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  Link: {
    color: "white",
    padding: "7px",
  },
}));
const TopMenu = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" className={classes.Link}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products" className={classes.Link}>
            {" "}
            Products{" "}
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/Contact-us" className={classes.Link}>
            {" "}
            Contactus{" "}
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products/new" className={classes.Link}>
            {" "}
            New Product{" "}
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
/*<div>
        <ul>
        <li style={{display: "inline", padding: "5px"}}><Link to ="/"> Home </Link> </li>
        <li style={{display: "inline", padding: "5px"}} ><Link to="/products"> Products </Link> </li>
        <li style={{display: "inline", padding: "5px"}}><Link to ="/contact-us"> Contactus </Link> </li>
        <li style={{display: "inline", padding: "5px"}}><Link to ="/Login"> Login  </Link> </li>
        <li style={{display: "inline", padding: "5px"}}> <button variant="contained" color="secondary"> Signup </button> </li>
            
        </ul>
    </div> */
export default TopMenu;
