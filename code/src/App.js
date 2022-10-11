import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails'
import Header from 'components/Header';
import Notfound from 'components/Notfound';
import MovieList from 'components/MovieList';

export const App = () => {
  const [renderedMovies, setRenderedMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=ef036d5d52e9f5b31fbadf6ef00b48d2&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => {
        console.log('data.results', data.results)
        setRenderedMovies(
          data.results.map((item) => ({
            id: item.id,
            title: item.title,
            releaseDate: item.release_date,
            rating: item.vote_average,
            description: item.overview,
            posterUrl: `https://image.tmdb.org/t/p/w342${item.poster_path}`,
            backdropUrl: `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`
            // from API  "base_url": "http://image.tmdb.org/t/p/",    "backdrop_sizes": ["w300", "w780", "w1280", "original"],     "poster_sizes": ["w92", "w154", "w185", "w342", "w500", "w780", "original"],//
          }))
        );
      })
      .catch((error) => console.log(error));
  }, []);

  // useEffect(() => {
  //   console.log('renderedMovies', renderedMovies)
  // }, [renderedMovies]);

  /* Popular movies for list page
  https://api.themoviedb.org/3/movie/popular?api_key=ef036d5d52e9f5b31fbadf6ef00b48d2&language=en-US&page=1
*/
  return (

    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MovieList popularList={renderedMovies} />} />
          <Route path="/details/:movieId" element={<MovieDetails popularList={renderedMovies} />} />
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