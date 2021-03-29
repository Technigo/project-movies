import React, { useEffect, useState} from 'react';


export const MovieList = () => {
  const MOVIES_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=e251592f16990230853a7c79c14797f4&region=SE"
  const [movies, setMovies] = useState([]);

  useEffect (() => {
    fetchMovies();
  });

  const fetchMovies = () => {
    fetch(MOVIES_URL)
    .then(response => response.json())
    .then(json => setMovies(json.results))
  }

  console.log(movies);

 
  return (
    <>
      <MovieList
      />
    </>
  );
}
