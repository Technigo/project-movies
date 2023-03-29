import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Movies from './components/Movies.js'
import NotFound from './components/NotFound.js'
import MovieDetails from './components/MovieDetail.js';

export const App = () => {
  const [fetchMovies, setFetchMovies] = useState([]) // default state for picking up data
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=db7243cd4866f0f7a8a865282262f6fd&language=en-US&page=${page}`)
      .then((response) => response.json())
      .then((data) => setFetchMovies(data.results))
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false)
        console.log(fetchMovies)
      })
  }, [page]) // square bracket meaning for only when mounting

  const upPage = () => {
    setPage(page + 1)
    console.log(page)
  }
  const downPage = () => {
    if (page === 1) {
      setPage(1)
    } else {
      setPage(page - 1)
    }
  }

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies movies={fetchMovies} upPage={upPage} downPage={downPage} />} />
        <Route path="/MovieDetails/:movieID" element={<MovieDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
