/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieList } from 'components/MovieList';
import { Header } from 'components/Header'

export const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=c78445f7216324dcfc408149681f2fcd&language=en-US&page=1')
      .then((data) => data.json())
      .then((configuredData) => {
        console.log(configuredData.results)
        setMovieList(configuredData.results);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return (
      <div className="loader">Loading...</div>
    )
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList movieList={movieList} />} />

      </Routes>
    </BrowserRouter>
  );
}

