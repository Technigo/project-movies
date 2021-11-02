import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "682d12076f83a3ee1e6f74f0a2622a54";

const Details = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  console.log(id);
  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    fetch(MOVIE_URL)
      .then((res) => res.json())
      .then((json) => setMovie(json));
  }, []);

  console.log("The movie is", movie);

  const backdrop_url = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
  const poster_url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div>
      <Link to="/"> Movies </Link>
      <p>{movie.title}</p>
      <p>{movie.vote_average} / 10</p>
      <p>{movie.overview}</p>
      <img src={backdrop_url} alt="movie backdrop" />
      <img src={poster_url} alt="movie poster" />
    </div>
  );
};

export default Details;
