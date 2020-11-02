import React from 'react'

import { MovieList } from "../src/components/js/MovieList"


const urlPopularMovies = "https://api.themoviedb.org/3/movie/popular?api_key={88b00ce6c0c72d59de65e4b1fcce3a85}&language=en-US&page=1";
const urlMovieDetails = "https://api.themoviedb.org/3/movie/{movie_id}?api_key={88b00ce6c0c72d59de65e4b1fcce3a85}&language=en-US"




export const App = () => {
  return (
    <div>
      <MovieList />
    </div>
  )
}
