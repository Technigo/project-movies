import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { Loader } from 'components/Loader';
import { Header } from 'components/Header'
import { MovieList } from 'components/MovieList';
import { Details } from 'components/Details'
import { NotFound } from 'components/NotFound'

export const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=c78445f7216324dcfc408149681f2fcd&language=en-US&page=1')
      .then((data) => data.json())
      .then((configuredData) => {
        setMovieList(configuredData.results);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return (
      <Loader />
    )
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList movieList={movieList} />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/404" replace />} />
        <Route path="/moviedetails/:movieId" element={<Details details={Details} />} />
      </Routes>
    </BrowserRouter>
  );
}

