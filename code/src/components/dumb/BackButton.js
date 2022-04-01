import React from "react";
import { Link } from "react-router-dom";

import "./BackButton.css";

const BackButton = () => {
  return (
    <Link className="back-link" to={"/"}>
      <img className="back-icon" src="../../backarrow.png" alt="back arrow" />
      <span className="back-label">Films</span>
    </Link>
  );
};

export default BackButton;
