import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../components/Home";
import Authform from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import MessageForm from "./MessageForm";

const Main = ({ authUser, errors, removeError, currentUser }) => {
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => (
            <Home {...routerProps} currentUser={currentUser} />
          )}
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
        <Route
          exact
          path="/users/:id/messages/new"
          component={withAuth(MessageForm)}
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
