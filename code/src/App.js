/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MovieDetail from 'components/MovieDetail';
import NotFound from 'components/NotFound';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MovieApp from './components/MovieApp';

export const App = () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=d96429e32bc0ad6087333ea9da61765c&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.error(error))
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieApp movieList={movieList} />} />
        <Route
          path="/movie/:id"
          element={<MovieDetail movieList={movieList} />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
