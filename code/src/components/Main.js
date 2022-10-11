import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import MovieDetail from './MovieDetail';
import NotFound from './NotFound';
import Movies from './Movies';

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=82911629aa763b7af65fbb5fa82c43e6&language=en-US&page=1';

const Main = () => {
  const [getMovies, setGetMovies] = useState([]);

  const fetchMovies = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setGetMovies(data.results))
      .catch((error) => console.error(error))
      .finally(() => console.log('no errors'));
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies getMovies={getMovies} />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>

  )
}

export default Main