import React, { useState, useEffect } from "react";
import { SingleMovie } from "../SingleMovie/SingleMovie";
import { Link } from "react-router-dom";

export const PopularList = () => {
  const [loading, setLoading] = useState(false);
  // useEffect
  // setLoading
  // fetch API https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US

  return (
    <>
      <h1>I am the PopularList component</h1>
      <p>Should probably map() over movies here</p>
      <Link key="" to="">
        <SingleMovie />
      </Link>
    </>
  );
};