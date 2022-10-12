import { MovieList } from 'MovieList';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Movies } from './Components/Movies'
import { NotFound } from './Components/NotFound'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
