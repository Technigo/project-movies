import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BASE_URL } from 'utils/urls';
import { List } from './components/List';
import { NotFound } from './components/NotFound';
import { Details } from './components/Details';
import { Header } from './components/Header';

export const App = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState('');
  useEffect(() => {
    setLoading(true);
    console.log('moviesList', moviesList);
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => setMoviesList(json.results))
      .catch((error) => console.log(error))
      .finally(() => {
        return setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<List movies={moviesList} />} />
        <Route path="/details/:movieName" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
