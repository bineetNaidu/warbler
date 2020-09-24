import React from "react";
import { Link } from "react-router-dom";

// STATICS
import "./Home.css";

const Home = ({ currentUser }) => {
  return (
    <>
      {!currentUser.isAuthenticated ? (
        <div className="home-hero">
          <h1>What Happening?</h1>
          <h4>New to Warbler?</h4>
          <Link to="/signup" className="btn btn-primary">
            Create a new Account?
          </Link>
        </div>
      ) : (
        <div>
          <pre>{JSON.stringify(currentUser, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default Home;
