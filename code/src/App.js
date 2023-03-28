/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MovieList from 'components/MovieList';
import NotFound from 'components/NotFound';
import MovieDetails from 'components/MovieDetails';
import Header from 'components/Header';
import { BASE_URL } from 'utils/urls';

// everything in the site has to be inside the <BrowserRouter>-tag from now on when we use
// react-router-dom for our projects
// The <Routes>-tag is needed for plural components
// The <Routes>-tag is needed for single components - it is self-closing
export const App = () => {
  const [movieList, setMovieList] = useState([]);
  
  useEffect(() => {
    fetch(BASE_URL)
      .then((data) => data.json())
      .then((configuredData) => { 
        setMovieList(configuredData.results);
      })
      // .catch((err) => {
    // console.log(err);
    // });
  }, []);
  return (
    // main wrapper for the whole app
    <BrowserRouter>
      {/* wrapper for every component that needs to be linked to */}
      <Header />
      <Routes>
        {/* path to a single component */}
        <Route path="/" element={<MovieList movieList={movieList} />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
        {/* this above Route path can be switched to the movies later - maybe rename to movieDetails or such */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      This is the start of our interesting week with movie releases!
    </BrowserRouter>
  );
}
