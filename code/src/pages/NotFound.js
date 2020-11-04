import React from "react";
import { Link } from "react-router-dom";

import "./notFound.css";

const NotFound = () => {
  return (
    <div>
      <Link to="/">
        <span className="back">Home</span>
      </Link>
    </div>
  );
};

export default NotFound;
