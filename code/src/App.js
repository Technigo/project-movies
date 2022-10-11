/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { List } from './components/List';
// import { Details } from './components/Details';
// import { Header } from './components/Header';
// import { NotFound } from './components/NotFound';

// url for movie-popular: https://api.themoviedb.org/3/movie/popular?api_key={35a0fb6f5f3fde8a6e6cf4ca489b902a}&language=en-US&page=1

// url for movie-details: https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US

// fetch('https://api.themoviedb.org/3/movie/550?api_key=35a0fb6f5f3fde8a6e6cf4ca489b902a')

// https://api.themoviedb.org/3/movie/popular?api_key=35a0fb6f5f3fde8a6e6cf4ca489b902a

export const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=35a0fb6f5f3fde8a6e6cf4ca489b902a')
      .then((response) => response.json())
      .then((data) => {
        setList(data.results)
        console.log(data.results)
      })
      .catch((event) => {
        console.error(console.error(event))
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])
  return (
    <List movies={setList} />
  );
}

