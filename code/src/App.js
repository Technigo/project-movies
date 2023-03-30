import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { NotFound } from 'components/NotFound'
import { MovieList } from 'components/MovieList'
import { Header } from 'components/Header'
import { Details } from 'components/Details'
import { TvSeries } from 'components/TVseries'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/tv-series" element={<TvSeries />} />
          <Route path="/movies/:id" element={<Details />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
