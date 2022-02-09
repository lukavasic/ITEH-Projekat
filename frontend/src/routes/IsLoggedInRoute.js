import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const IsLoggedInRoute = ({
  component: Component,
  auth: { isLoggedIn },
  ...rest//path="" exact
}) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
  //auth, zado sto je tako definisano u index reduceru
});

export default connect(mapStateToProps)(IsLoggedInRoute);
