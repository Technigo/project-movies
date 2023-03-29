/* import React, { useState, useEffect } from 'react'; */
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MovieList from 'Components/MovieList'
import NotFound from 'Components/NotFound'
import MovieDetails from 'Components/MovieDetails'
/* import { Movies } from 'Components/Movies' */

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Routes>
    </BrowserRouter>
  );
}

/* BrowserRouter= Wrapper for everything / main wrapper for the whole wrap */
/* Route= Wrapper for every component */
/* Route path= Path to a single component */
