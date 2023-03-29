import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieDetails } from './components/MovieDetails';
import { Movies } from './components/Movies';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}