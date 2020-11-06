import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <p>Unfortunately, this movie doesn't exist yet.</p>
      <p>Please take me bak to the movie list!</p>
      <Link to="/">
        <p>&raquo;</p>
      </Link>
    </>
  );
};
