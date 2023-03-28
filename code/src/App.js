import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { MovieList } from 'components/Movies';

export const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=c78445f7216324dcfc408149681f2fcd&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2600);
      })
  }, []);

  // only shows if spammed  or with slow internet
  if (loading) {
    return (
      <div className="loader">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MovieList movies={movieList} />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}