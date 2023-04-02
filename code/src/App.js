/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieList from 'components/MovieList';
// import NotFound from 'components/NotFound';
// We never used this but we keep it for future usage if necessary
import MovieDetails from 'components/MovieDetails';
import { BASE_URL } from 'utils/urls';

export const App = () => {
  const [movieList, setMovieList] = useState([]);
  
  useEffect(() => {
    fetch(BASE_URL)
      .then((data) => data.json())
      .then((configuredData) => setMovieList(configuredData.results))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList movieList={movieList} />} />
        <Route path="/details/:id" element={<MovieDetails />} />      
        {/* <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} /> I removed Navigate from the
        import at the top since I commented this out */}
      </Routes>
    </BrowserRouter>
  );
}