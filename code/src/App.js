import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MovieList } from 'components/MovieList';
import { NotFound } from 'components/NotFound';
import { Details } from 'components/Details';
import { Header } from 'components/Header';
import { BASE_URL } from 'utils/urls';

export const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setMovieList(data.results))
  }, [])
  return (
    // main wrapper for the whole app
    <BrowserRouter>
      {/* wrapper for evert component that needs to be linked to */}
      <Header />
      <Routes>
        {/* path to a single component */}
        <Route path="/" element={<MovieList movieList={movieList} />} />
        <Route path="/details/:movieTitle" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}