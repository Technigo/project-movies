// /////////////// IMPORT //////////////////////// //

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MovieInfoPage } from './Components/MovieInfoPage/MovieInfoPage';
import { MovieList } from './Components/MovieList/MovieList';
import { NotFound } from './Components/NotFound/NotFound';
import { BASE_URL, API_KEY } from './utils/urls'

// /////////////// MAIN APP //////////////////////// //

// <BrowserRouter> = All linked components goes here.
// Outside you put things like a NAVBAR that will be there all the time.
// <Routes> = This tag is needed for plural components.
// <Route> = Is the single component an were you write the path and the element.

export const App = () => {
  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(`${BASE_URL}804150?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, []);

  if (loading) {
    return (
      <p>Loading</p>
    )
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList movieList={movieList} />} />
          <Route path="/MovieInfoPage" element={<MovieInfoPage />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
