import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PopularMovies from 'pages/PopularMovies';
import NotFound from 'pages/NotFound';
import MovieDetails from 'pages/MovieDetails';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularMovies />} />
        <Route path="/details" element={<MovieDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>

  );
}

// https://api.themoviedb.org/3/movie/popular?api_key=52f9f6dc03440f8be0c16de930243dfe&language=en-US&page=1
