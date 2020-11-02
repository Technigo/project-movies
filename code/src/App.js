import React from 'react'

import { MovieList } from "../src/components/js/MovieList"

const urlMovieDetails = "https://api.themoviedb.org/3/movie/{movie_id}?api_key={88b00ce6c0c72d59de65e4b1fcce3a85}&language=en-US"

// just for showing data while working
const API_KEY = "88b00ce6c0c72d59de65e4b1fcce3a85";
const URL_POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const TestingData = () => {
    fetch (URL_POPULAR_MOVIES)
      .then((response) => response.json())
      .then ((json) => console.log(json.results));
  };


export const App = () => {
  return (
    <div>
      <TestingData />
      <MovieList />
    </div>
  )
}
