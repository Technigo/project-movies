import { Header } from 'components/Header';
import { MovieDetails } from 'components/MovieDetail';
import { MovieList } from 'components/MovieList';
import { NotFound } from 'components/NotFound';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/moviedetails" element={<MovieDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
