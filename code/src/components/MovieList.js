import React from "react";

import "./movie-list.css";


const MovieList = ({ movieTitle, averageVote, releaseDate }) => {
  // const [movies, setMovies] = useState();

  // fetch(API_URL)
  //   .then(response => response.json())
  //   .then(data => setMovies(data.results));
  // .then(data => setMovies(data));

  return (
    <div className="movie-card">
      <h1>{movieTitle}</h1>
      <p>Rating: {averageVote}/10</p>
      <p>Release date: {releaseDate}</p>
    </div>
  );

};

export default MovieList;