import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import MovieList from "./components/MovieList";

const API_key = "5ddb547497cb885965bcba7335e4be9c";
const MOVIES_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}&language=en-US&page=1`;
// const IMG_SIZES_API = `https://api.themoviedb.org/3/configuration?api_key=${API_key}`;

export const App = () => {

  const [movies, setMovies] = useState([]);

  console.log("Render 1");
  //fetch top rated movies
  useEffect(() => {
    fetch(MOVIES_API)
      .then(response => response.json())
      .then(data => setMovies(data.results));

  }, []);

  //fetch poster image



  console.log("Render 2");


  return (
    <BrowserRouter>
      {/* <h1>Hello, Rebeka. Best of luck with this week's project! ^.^</h1> */}
      <section className="app-container">
        {movies.map(movie => (
          <MovieList
            key={movie.id}
            {...movie}
          />
        ))}

      </section>
    </BrowserRouter>
  )
}
