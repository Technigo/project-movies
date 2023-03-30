import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MovieList } from 'components/MovieList';
import { NotFound } from 'components/NotFound';
import { Details } from 'components/Details';
import { BASE_URL } from 'utils/urls';

export const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, [])

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    // main wrapper for the whole app
    <BrowserRouter>
      {/* wrapper for evert component that needs to be linked to */}
      <Routes>
        {/* path to a single component */}
        <Route path="/" element={<MovieList movieList={movieList} />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}