import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// STATICS
import logo from "../images/warbler-logo.png";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Warbler Logo" />
            </Link>
          </div>

          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="signup">Signup</Link>
            </li>
            <li>
              <Link to="signin">Sign In</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({ currentUser: state.currentUser });

export default connect(mapStateToProps, null)(Navbar);
