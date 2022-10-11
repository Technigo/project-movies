import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails'
import Header from 'components/Header';
import Notfound from 'components/Notfound';
import MovieList from 'components/MovieList';

export const App = () => {
  const [renderedMovies, setRenderedMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=ef036d5d52e9f5b31fbadf6ef00b48d2&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setRenderedMovies(data.results))
  }, []);

  /* Popular movies for list page
  https://api.themoviedb.org/3/movie/popular?api_key=ef036d5d52e9f5b31fbadf6ef00b48d2&language=en-US&page=1
*/
  // console.log(setPokemonList)
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList popularList={renderedMovies} />} />
        <Route path="/details/:pokemonName" element={<MovieDetails />} />
        <Route path="/404" element={<Notfound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
/*
renderedMovies
*/