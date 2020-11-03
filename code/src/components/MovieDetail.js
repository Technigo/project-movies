import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  const API_KEY = "f7e0c4070f4665dbae6d58fba626cfe4";
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  // console.log("API:", URL);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json);
      });
  }, [movieId, URL]);

  console.log("Movie", movie);
  return (
    <>
      <h1>{movie.title}</h1>
    </>
  );
};

export default MovieDetail;
