import React from "react";

import { withRouter } from "react-router";
import userService from "../services/UserService";
const Admin = (props) => {
  React.useEffect(() => {
    if (!userService.isAdmin()) {
      //if user is not log in than add new product will not be shown and will redirect it into the login page
      props.history.push("/login");
    }
  }, []);
  return <>{props.children}</>;
};

export default withRouter(Admin);
