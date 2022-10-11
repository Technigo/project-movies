import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MovieList from 'components/MovieList'

const Movie = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=2248800ec8114dc953ca7e0362a1332b&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setMovieList(data.results));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList movies={movieList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Movie;