import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import MovieDetails from 'components/MovieDetails'
import NotFound from 'components/NotFound'
import Header from 'components/Header'
import MovieList from 'components/MovieList'

export const App = () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=53b8247bd63f1573ceb909c8f6502bd9&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setMovieList(data.results))
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList list={movieList} />} />
        <Route path="/details/:movieTitle" element={<MovieDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
