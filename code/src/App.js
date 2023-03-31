import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MovieList from 'components/MovieList';
import NotFound from 'components/NotFound';
import MovieDetails from 'components/MovieDetails';
import Header from 'components/Header';
import { POPULARMOVIE_URL } from 'components/urls.js';
import PopcornLoader from './components/PopcornLoader';
import TopRatedMovies from './components/TopRatedMovies';
import PopularMovies from './components/PopularMovies';

// put the set loading here
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
      });
  }, []);

  if (loading) {
    return (
      <div>
        <PopcornLoader />
      </div>
    );
  }

  return (
    // main wrapper for the whole app
    <BrowserRouter>
      {/* wrapper for evert component that needs to be linked to */}
      <Header />
      <Routes>
        {/* path to a single component */}
        <Route path="/" element={<MovieList movies={movieList} />} />
        <Route path="/MovieDetails/:movieId" element={<MovieDetails />} />
        <Route path="/top-rated" element={<TopRatedMovies />} />
        <Route path="/popular" element={<PopularMovies />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
