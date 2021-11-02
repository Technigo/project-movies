import React from "react";
import { Link } from "react-router-dom";

const NoPageFound = () => {
  return (
    <div>
      <h2> Sorry page not found</h2>

      <button>
        <Link to="/"> Go back </Link>
      </button>
    </div>
  );
};

export default NoPageFound;
