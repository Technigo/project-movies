import React from "react";
import { useHistory } from "react-router-dom";
import { Icon } from "components/Icon";

export const LinkButton = () => {
  const history = useHistory();
  return (
    <header>
      <button className="back-button" onClick={history.goBack}>
        <span className="back-button-icon">
          <Icon />
        </span>
        <h4>Movies</h4>
      </button>
    </header>
  );
};
