import React from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../components/Home";
import Authform from "../components/AuthForm";
import { authUser } from "../store/actions/auth";

const Main = ({ authUser }) => {
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

const mapStateToProps = (state) => ({ currentUser: state.currentUser });

export default withRouter(connect(mapStateToProps, { authUser })(Main));
