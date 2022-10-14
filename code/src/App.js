import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from 'Components/Movies';
import Details from 'Components/Details';

export const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=f8eb3d0941c8cec7118b188a305910c5&language=en-US&page=1')
      .then((data) => data.json())
      .then((configuredData) => setMovies(configuredData.results))
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies movies={movies} />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}