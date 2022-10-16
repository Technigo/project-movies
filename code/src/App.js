/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

// url for movie-popular: https://api.themoviedb.org/3/movie/popular?api_key={35a0fb6f5f3fde8a6e6cf4ca489b902a}&language=en-US&page=1
// url for movie-details: https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US
// fetch('https://api.themoviedb.org/3/movie/550?api_key=35a0fb6f5f3fde8a6e6cf4ca489b902a')
// https://api.themoviedb.org/3/movie/popular?api_key=35a0fb6f5f3fde8a6e6cf4ca489b902a

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Details from 'components/Details';
import { NotFound } from 'components/NotFound';
import Header from 'components/Header';
import { MovieList } from 'components/MovieList';
import SelectList from 'components/SelectList';

export const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [details, setDetails] = useState();
  const [selectList, setSelectList] = useState();

  // const [loading, setLoading] = useState();
  // if (loading) {
  // return(

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=35a0fb6f5f3fde8a6e6cf4ca489b902a&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setMovieList(data.results));
  }, []);
  // useEffect(() => {
  //     fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=35a0fb6f5f3fde8a6e6cf4ca489b902a&language=en-US`)
  //       .then((response) => response.json())
  //       .then((data) => setDetails(data.results));
  //   }, []);

  return (
    <BrowserRouter>
      {/* <Header />
      <SelectList /> */}
      <Routes>
        <Route path="/" element={<MovieList list={movieList} />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
