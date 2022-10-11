import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import IndividualMovie from './components/IndividualMovie';
import NotFound from './components/NotFound';
import List from './components/List';
import { API_URL } from './urls/urls';

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(API_URL)
      .then((res) => res.json())
      .finally(() => setLoading(false))
    console.log(API_URL)
  }, [])

  return (
    <BrowserRouter>
      {loading && <Home />}
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/individualmovie" element={<IndividualMovie />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
