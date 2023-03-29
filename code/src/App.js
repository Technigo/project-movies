import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from 'components/NotFound';
import { MovieDetails } from './components/MovieDetails';
import { Movies } from './components/Movies';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}