import React from "react";
import { useHistory } from "react-router";
import "./NotFound.css";

const NotFound = () => {
  const history = useHistory(); // remembers previously rendered pages

  const onButtonHomeClick = () => {
    history.push("/"); // function that tells button to "push" to specified path
  };

  return (
    <div className="notfound-container">
      <p>Sorry, this page doesn't exist</p>
      <button onClick={onButtonHomeClick}>Back to movies</button>
    </div>
  );
};

export default NotFound;
