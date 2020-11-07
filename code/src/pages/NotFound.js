import React from "react";
import { useHistory } from "react-router-dom";

import { BackButton } from "../components/BackButton";

export const NotFound = () => {
  const history = useHistory();
  return (
    <main className="error-message">
      <h2>Ooops, something went wrong - Please try again</h2>
      <BackButton className="movies-back-button" history={history} />
    </main>
  );
};
