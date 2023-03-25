import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails';
import MovieList from 'components/MovieList';
import NotFound from 'components/NotFound';
import { BASE_URL } from 'components/utils/Url'

export const App = (movie) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
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
