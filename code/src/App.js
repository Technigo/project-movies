/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import List from 'components/List';
import NotFound from 'components/NotFound';
import Details from 'components/Details';
import Header from 'components/Header';
import { BASE_URL } from 'utils/urls';

// everything in the site has to be inside the <BrowserRouter>-tag from now on when we use
// react-router-dom for our projects
// The <Routes>-tag is needed for plural components
// The <Routes>-tag is needed for single components - it is self-closing
export const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results))
  }, [])
  return (
    // main wrapper for the whole app
    <BrowserRouter>
      {/* wrapper for every component that needs to be linked to */}
      <Header />
      <Routes>
        {/* path to a single component */}
        <Route path="/" element={<List pokemons={pokemonList} />} />
        <Route path="/details/:pokemonName" element={<Details />} />
        {/* this above Route path can be switched to the movies later - maybe rename to movieDetails or such */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      This is the start of our interesting week with movie releases!
    </BrowserRouter>
  );
}
