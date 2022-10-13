import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MovieDetail from 'components/MovieDetail';
import NotFound from 'components/NotFound';
import MovieApp from './components/MovieApp';

export const App = () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=d96429e32bc0ad6087333ea9da61765c&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.error(error))
      .finally(() => console.log(`the movielist: ${movieList}`))
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieApp movieList={movieList} />} />
        <Route
          path="/movie/:id"
          element={<MovieDetail movieList={movieList} />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
        {/* Det här funkar inte om man försöker nå /movie/vad-som-helst. /vad-som-helst funkar dock.
        <Route path="/movie/*" element={<Navigate to="/404" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
