import React from "react";
import { NavLink } from "react-router-dom";
import chevron from "../assets/chevron-circle-left-solid.svg";

export const BackButton = () => {
  return (
    <div className="back-button-container">
      <NavLink exact to={"/"}>
        <img className="chevron-icon" style={{ width: 20 }} src={chevron} /> Movies
      </NavLink>
    </div>
  );
};
