import React from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../components/Home";
import Authform from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";

const Main = ({ authUser, errors, removeError }) => {
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <Home {...routerProps} />}
        />
        <Route
          exact
          path="/signin"
          render={(routerProps) => (
            <Authform
              errors={errors}
              removeError={removeError}
              {...routerProps}
              btnTxt="Log in"
              heading="Welcome Back"
              onAuth={authUser}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={(routerProps) => (
            <Authform
              errors={errors}
              removeError={removeError}
              {...routerProps}
              btnTxt="Sign me up!"
              signup
              onAuth={authUser}
              heading="Join Warbler today."
            />
          )}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  errors: state.errors,
});

export default withRouter(
  connect(mapStateToProps, { authUser, removeError })(Main)
);
