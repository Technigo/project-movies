/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { MovieDetails } from 'components/MovieDetail';
import { NotFound } from 'components/NotFound';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { MovieList } from './components/MovieList'

export const App = (movie) => {
  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=f11ed04ddfe383ddef42be786607cc39&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.results)
      })
      .catch((e) => {
        console.error(e)
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  if (loading) {
    return (<p>Loading...</p>)
  }

  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MovieList movies={movieList} />} />
          <Route path="/movieDetails/:movieId" element={<MovieDetails movie={movie} />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
