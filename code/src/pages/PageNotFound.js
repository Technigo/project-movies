import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <article>
      <h1>Page not found</h1>
      <Link to="/">back to movies</Link>
    </article>
  );
};

export default PageNotFound;
