import React from "react";
import { Link } from "react-router-dom";
import { FaChevronCircleLeft } from "react-icons/fa";

import "./Errors.css";

const Errors = () => {
  return (
    <div className="error-container">
      <h1>
        Sorry! This movie is not found{" "}
        <span role="img" aria-label="sad-face">
          😢
        </span>
      </h1>
      <Link className="back-arrow" to="/">
        <FaChevronCircleLeft />
        Go back to see the movies
      </Link>
    </div>
  );
};

export default Errors;
