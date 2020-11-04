import React from "react";
import { Link } from "react-router-dom";

import "./notFound.css";

const NotFound = () => {
  return (
    <div className="error-container">
      <h3>This page doesn't exists</h3>
      <Link to="/">
        <p className="error-go-back">Home</p>
      </Link>
    </div>
  );
};

export default NotFound;
