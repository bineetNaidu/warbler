import React from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../components/Home";

const Main = () => {
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <Home {...routerProps} />}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({ currentUser: state.currentUser });

export default withRouter(connect(mapStateToProps, null)(Main));
