/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList';
import { MoviesDetails } from 'components/MoviesDetails';
import NotFound from 'components/NotFound';


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
