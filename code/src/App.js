import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PopularMovies } from 'pages/PopularMovies'
import { MovieDetails } from 'components/MovieDetails'
import { NotFound } from 'components/NotFound'
import { Header } from 'components/Header'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PopularMovies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  )
}
