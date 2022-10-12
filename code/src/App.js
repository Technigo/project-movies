import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails';
import MovieList from 'components/MovieList';
import NotFound from 'components/NotFound';

export const App = (movie) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=d7ebb1544b11b5a98ffd2c23bb80dd3b&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BrowserRouter>
      {/* Can put a component outside Routes which will be visible on every page */}
      <Routes>
        <Route path="/" element={<MovieList list={movieList} />} />
        <Route path="/movies/:movieId" element={<MovieDetails movie={movie} />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
