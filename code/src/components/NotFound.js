import React from "react";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();

  const onButtonClick = () => {
    history.push("/");
  };

  return (
    <div>
      <p>Sorry, not found 😢</p>
      <button onClick={onButtonClick}>Take me back!</button>
    </div>
  );
};

export default NotFound;
