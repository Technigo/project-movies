import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import MovieList from "./components/MovieList";

const API_key = "5ddb547497cb885965bcba7335e4be9c";
const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}&language=en-US&page=1`;

export const App = () => {

  const [movies, setMovies] = useState([]);

  const fetchTopRatedMovies = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  };

  fetchTopRatedMovies();

  return (
    <BrowserRouter>
      {/* <h1>Hello, Rebeka. Best of luck with this week's project! ^.^</h1> */}
      <section className="app-container">
        {movies.map(movie => (
          <MovieList
            key={movie.id}
            movieTitle={movie.title}
            averageVote={movie.vote_average}
            releaseDate={movie.release_date}
          />
        ))}

      </section>
    </BrowserRouter>
  )
}
