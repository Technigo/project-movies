import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Movies } from './components/Movies';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

/*
<Route path="/" element={<List pokemons={list} />} />
        <Route path="/details/:pokemonName" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} /> */