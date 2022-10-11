import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Navigate, add in import later - done!

import { Header } from 'components/Header';
import { List } from 'pages/List';
import { Details } from 'pages/Details';
import { NotFound } from 'components/NotFound';

export const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.json())
      .then((data) => {
        setList(data.results)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  if (loading) {
    return (
      <p>Loading loading ... </p>
    );
  }

  console.log(list)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<List pokemons={list} />} />
        <Route path="/details/:pokemonName" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
