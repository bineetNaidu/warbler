import React from "react";
import { Link } from "react-router-dom";

// STATICS
import "./Home.css";

const Home = () => {
  return (
    <div className="home-hero">
      <h1>What Happening?</h1>
      <h4>New to Warbler?</h4>
      <Link to="/signup" className="btn btn-primary">
        Create a new Account?
      </Link>
    </div>
  );
};

export default Home;
