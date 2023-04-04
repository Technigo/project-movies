import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { NotFound } from 'components/NotFound'
import { MovieList } from 'components/MovieList'
import { Header } from 'components/Header'
import { Details } from 'components/Details'
import { TVSeriesList } from 'components/TVseriesList'
import { TVseriesDetails } from 'components/TVseriesDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<Details />} />
          <Route path="/tvseries" element={<TVSeriesList />} />
          <Route path="/tvseries/:id" element={<TVseriesDetails />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
