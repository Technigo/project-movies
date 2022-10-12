import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';
import IndividualMovie from './components/IndividualMovie';
import NotFound from './components/NotFound';
import List from './components/List';
import { API_URL } from './urls/urls';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    setLoading(true)
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setList(data.results))
      .finally(() => setLoading(false))
  }, [])

  return (
    <BrowserRouter>
      {loading && <LoadingPage />}
      <Routes>
        <Route path="/" element={<List movies={list} />} />
        <Route path="/individualmovie/:movieId" element={<IndividualMovie />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
