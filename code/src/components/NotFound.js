import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="error-container">
      <p className="error-p">Movie not found!</p>
      <Link to="/">
        <button className="go-back-button">Back to movies</button>
      </Link>
    </div>
  );
};
