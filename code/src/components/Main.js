import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Movies from './Movies';

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=82911629aa763b7af65fbb5fa82c43e6&language=en-US&page=1';

const Main = () => {
  const [getMovies, setGetMovies] = useState([]);

  const fetchMovies = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setGetMovies(data))
      .catch((error) => console.error(error))
      .finally(() => console.log('no errors'));
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <p>Hej!</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies getMovies={getMovies} />} />
        </Routes>
        <p>Hej!</p>
      </BrowserRouter>
    </>

  )
}

export default Main