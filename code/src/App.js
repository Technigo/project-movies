import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' // For app exclusive
import NotFound from 'Components/NotFound';
import MovieDetails from 'Components/MovieDetails';
import MovieList from './Components/MovieList'
import Header from './Components/Header'

export const App = () => {
  const API_KEY = '0b4c9ac144793b50dd9acb3ecd05ab10'

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MovieList API_KEY={API_KEY} />} />
          <Route path="/details/:movieId" element={<MovieDetails API_KEY={API_KEY} />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
