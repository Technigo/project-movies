import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from 'components/Header';
import MovieDetails from 'components/MovieDetails';
import MovieList from 'components/MovieList';
import NotFound from 'components/NotFound';
import Footer from 'components/Footer';

export const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => setPokemonList(data.result));
  }, []);

  return (
    <BrowserRouter>
      {/* Can put a component outside Routes which will be visible on every page */}
      <Header />
      <Routes>
        <Route path="/" element={<MovieList list={pokemonList} />} />
        <Route path="/details/:pokemonName" element={<MovieDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
