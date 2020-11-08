import React from "react";

import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <article className="try-again">
      <h1>
        Oops! Page not found <span>😱</span>
      </h1>
      <h3>Try again</h3>
      <Link className="back-button-not-found" to="/">
        back to movies
      </Link>
    </article>
  );
};

export default PageNotFound;
