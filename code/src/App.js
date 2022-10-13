import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MovieList from 'components/MovieList';
import MovieDetails from 'components/MovieDetails';
import NotFound from 'components/NotFound';

export const App = (movie) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=775e89d95406e8985a2124041da6e29f&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
      })
      .catch((e) => {
        console.error(console.error(e));
      });
  }, []);

  return (
    <div className="outer-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList list={movieList} />} />
          <Route path="/movieDetails/:movieId" element={<MovieDetails movie={movie} />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
