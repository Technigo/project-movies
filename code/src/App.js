import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from 'components/Home';
import { MovieList } from 'components/MovieList';
import { TvList } from 'components/TvList';
import { MovieDetails } from 'components/MovieDetails';
import { TvDetails } from 'components/TvDetails';
import { NotFound } from 'components/NotFound';
import { Header } from 'components/Header';

export const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    // main wrapper for the whole app
    <BrowserRouter>
      <Header />
      {/* wrapper for evert component that needs to be linked to */}
      <Routes>
        {/* path to a single component */}
        <Route path="/" element={<Home />} />
        <Route path="/movielist" element={<MovieList loading={loading} setLoading={setLoading} />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
        <Route path="/tvlist" element={<TvList loading={loading} setLoading={setLoading} />} />
        <Route path="/tvdetails/:id" element={<TvDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}