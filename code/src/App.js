import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MovieList } from 'Components/List'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  );
}
