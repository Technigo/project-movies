import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TheMovies from './components/TheMovies';
import MovieDetails from './components/MovieDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<TheMovies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </main>

    </BrowserRouter>
  );
}
