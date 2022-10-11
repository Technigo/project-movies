import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MoviePage from 'components/MoviePage';
import NotFound from 'components/NotFound';
import MovieApp from './components/MovieApp'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieApp />} />
        <Route
          path="/movie/:id"
          element={<MoviePage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
