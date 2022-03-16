import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLoggedIn } from "../utils/isLoggedIn";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (isLoggedIn() ? <Component /> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;
