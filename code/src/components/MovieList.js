import React from "react";

import "./movie-list.css";


const MovieList = ({ title, vote_average, release_date, poster_path }) => {
  // const [movies, setMovies] = useState();

  // fetch(API_URL)
  //   .then(response => response.json())
  //   .then(data => setMovies(data.results));
  // .then(data => setMovies(data));

  const POSTER_URL = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="movie-card">
      <img className="movie-img" src={POSTER_URL} alt=""></img>
      <h1>{title}</h1>
      <p>Rating: {vote_average}/10</p>
      <p>Release date: {release_date}</p>
    </div>
  );

};

export default MovieList;