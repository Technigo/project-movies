import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviePosters from 'Pages/MovieFeed';
import SingleMovie from 'Pages/SingleMovie';

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MoviePosters />} />
          <Route path="/posters/:id" element={<SingleMovie />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
