/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieList from 'components/MovieList';
// import NotFound from 'components/NotFound';
import MovieDetails from 'components/MovieDetails';
// import Footer from 'components/Footer';
// import Header from 'components/Header';
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
      .then((configuredData) => setMovieList(configuredData.results))
      // .catch((err) => {
    // console.log(err);
    // });
  }, []);
  return (
    // main wrapper for the whole app
    <BrowserRouter>
      {/* wrapper for every component that needs to be linked to */}
      {/* <Header /> */}
      <Routes>
        {/* path to a single component */}
        <Route path="/" element={<MovieList movieList={movieList} />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        {/* This second path was not corresponding with our code on line 14 in MovieList.js and 
        therefore it was not working and was not taking the user to the movie details. */}
        
        {/* <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} /> I removed Navigate from the
        import at the top since I commented this out */}
      </Routes>
    </BrowserRouter>
  );
}