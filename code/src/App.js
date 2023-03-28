import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { List } from './components/List';
import { NotFound } from './components/NotFound';
import { Details } from './components/Details';
import { Header } from './components/Header';

export const App = () => {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    console.log('moviesList', moviesList);
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=c939c336f6593e65481de7c928e9c092&page=1'
    )
      .then((response) => response.json())
      .then((json) => setMoviesList(json.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<List movies={moviesList} />} />
        <Route path="/details/:movieName" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
