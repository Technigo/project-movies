import React from 'react';
// import Header from 'components/Header';
import MovieList from 'components/MovieList';
import Details from 'components/Details';
import NotFound from 'components/NotFound';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/details/:movieId" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
