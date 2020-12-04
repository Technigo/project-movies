import React, { useEffect, useState } from 'react';

import { MovieCard } from 'components.js/MovieCard'

import "components.css/movieList.css"


export const MovieList = () => {
  const MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=636ed5609cbdb1c9a92992698d99fea5&language=en-US&page=1&region=US';
  const[movies,setMovies] = useState([]);

  
  useEffect(() =>{
    fetch(MOVIES_URL)
    .then((response) => response.json())
    .then (json => setMovies(json.results));
  },[]);

  return (
    <section className="movies-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} 
                  {...movie}/>
    ))}</section>
  );
};
