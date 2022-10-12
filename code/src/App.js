import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieList } from './components/MovieList.js'
import { Details } from './components/Details'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
