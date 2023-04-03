import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MovieList from 'komponenter/MovieList'
import MovieDetails from 'komponenter/MovieDetails'
import NotFound from 'komponenter/NotFound'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="404" replace />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
/* BrowserRouter= Wrapper for everything / main wrapper for the whole wrap */
/* Route= Wrapper for every component */
/* Route path= Path to a single component */
