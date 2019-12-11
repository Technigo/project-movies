import React from "react";

export const Overlay = props => {
  return (
    <div className="overlay">
      <h2>{props.title}</h2>
      <h3>Released {props.release_date}</h3>
    </div>
  );
};
