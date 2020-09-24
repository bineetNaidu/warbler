import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";

// STATICS
import logo from "../images/warbler-logo.png";
import "./Navbar.css";

const Navbar = ({ logout, currentUser }) => {
  // STATES

  // HOOKS && CONTEXT

  // FUNCTIONS
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Warbler Logo" />
          </Link>
        </div>

        <ul className="nav navbar-nav navbar-right">
          {currentUser.isAuthenticated ? (
            <>
              <li>
                <Link to={`/users/${currentUser.user.id}/messages/new`}>
                  New Message
                </Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="signup">Signup</Link>
              </li>
              <li>
                <Link to="signin">Sign In</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({ currentUser: state.currentUser });

export default connect(mapStateToProps, { logout })(Navbar);
