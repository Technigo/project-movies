import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

// https://api.themoviedb.org/3/movie/popular?api_key=7e62f4c867db459871fea2a9a052cb08&language=en-US&page=1

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const API_KEY = '7e62f4c867db459871fea2a9a052cb08';
  console.log(list)

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => {
        setList(data.results)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList movies={list} />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
