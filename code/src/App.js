import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotFound } from 'components/NotFound'
import { MovieList } from 'components/MovieList'

export const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
