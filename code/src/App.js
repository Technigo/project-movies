import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails'
import MovieList from 'components/MovieList';
import Notfound from 'components/Notfound.js';

import { POPULARMOVIE_URL } from 'short/Urls.js'
import Icon from 'components/icons/Largepop.png';

export const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(POPULARMOVIE_URL)
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
        <img
          className="popcorn-spinner"
          src={Icon}
          alt="button that goes back shaped as popcorn" />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MovieList movies={movieList} />} />
          <Route path="/MovieDetails/:movie_id" element={<MovieDetails />} />
          <Route path="/404" element={<Notfound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

/*
renderedMovies
*/