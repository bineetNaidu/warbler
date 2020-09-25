import React, { Component } from "react";
import { connect } from "react-redux";

export default function withAuth(RenderedComponent) {
  class Authenticated extends Component {
    componentWillMount() {
      if (this.props.isAuthenticated === false) {
        this.props.history.push("/signin");
      }
    }

    componentWillUpdate(nextProp) {
      if (nextProp.isAuthenticated === false) {
        this.props.history.push("/signin");
      }
    }

    render() {
      return <RenderedComponent {...this.props} />;
    }
  }
  const mapStateToProps = (state) => ({
    isAuthenticated: state.currentUser.isAuthenticated,
  });

  return connect(mapStateToProps)(Authenticated);
}
