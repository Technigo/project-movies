import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import List from './components/List';
import API_URL from './urls/urls'

export const App = () => {
  return (
    <BrowserRouter>
     <Home />
      <Routes>
        <Route path="/" element={<List/>} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
