import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieList } from 'components/MovieList';

export const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=c78445f7216324dcfc408149681f2fcd&language=en-US&page=1')
      .then((data) => data.json())
      .then((configuredData) => {
        setMovieList(configuredData.results);
      })
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList movieList={movieList} />} />
      </Routes>
    </BrowserRouter>
  );
}

