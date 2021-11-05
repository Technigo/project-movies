import React from "react";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();

  const returnButton = () => {
    history.push("/");
  };

  return (
    <div className="not-found-container">
      <p className="not-found-message">Movie not found!</p>
      <button className="not-found" onClick={returnButton}>
        Home page
      </button>
    </div>
  );
};

export default PageNotFound;
