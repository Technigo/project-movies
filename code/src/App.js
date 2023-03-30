import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NotFound from 'components/NotFound';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';

// API Key:95ef8b2227f45566b4eecd3687c10466
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
