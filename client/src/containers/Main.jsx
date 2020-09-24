import React from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../components/Home";
import Authform from "../components/AuthForm";

const Main = () => {
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
            <Authform {...routerProps} btnTxt="Log in" heading="Welcome Back" />
          )}
        />
        <Route
          exact
          path="/signup"
          render={(routerProps) => (
            <Authform
              {...routerProps}
              btnTxt="Sign me up!"
              signup
              heading="Join Warbler today."
            />
          )}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({ currentUser: state.currentUser });

export default withRouter(connect(mapStateToProps, null)(Main));
