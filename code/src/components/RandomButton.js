import React from "react";

export const RandomButton = ({ onRandomButtonClick }) => {
  return (
    <button className="go-back-button extra-random-button-style" onClick={onRandomButtonClick}>
      surprise
    </button>
  );
};
