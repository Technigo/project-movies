import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ListMovies from 'components/ListMovies';
import NotFound from 'components/NotFound';
import Details from 'components/Details';
import Header from 'components/Header';
import { BASE_URL } from 'utils/urls';

export const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  // this is borrowed from the exmaple project
  useEffect(() => {
    setLoading(true);
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.results)
      })
      .catch((e) => {
        console.error(e)
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    // this is the main wrapper for the whole app
    <BrowserRouter>
      {/* wrapper for every component that need to be linked to */}
      <Header />
      <Routes>
        {/* path to a single component */}
        <Route path="/" element={<ListMovies movies={movieList} />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}