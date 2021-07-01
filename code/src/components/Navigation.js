import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav>
      <Link to='/'>
        <img src='../logo.svg' alt='logo' />
      </Link>
    </nav>
  );
};

export default Navigation;
