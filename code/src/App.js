/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import MovieList from 'components/MovieList'
import MovieDetails from 'components/MovieDetails'
import NotFound from 'components/NotFound';
import { BASE_URL } from 'utils/urls';

export const App = () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.error(error))
      .finally(() => console.log(`the movielist: ${movieList}`))
  }, []);

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MovieList movieList={movieList} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
