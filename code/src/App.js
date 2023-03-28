import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieDetails } from './components/MovieDetails';
import { Movies } from './components/Movies';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/details/:movieTitle" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}