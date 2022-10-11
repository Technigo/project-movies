import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' // For app exclusive
import NotFound from 'Components/NotFound';
import MovieDetails from 'Components/MovieDetails';
import MovieList from './Components/MovieList'
import Header from './Components/Header'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/details/:movieName" element={<MovieDetails />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
