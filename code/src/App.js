import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MovieList from 'components/MovieList'
import MovieDetails from 'components/MovieDetails';

export const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieList />}></Route>
        <Route path='/movies/:movieId' element={<MovieDetails />}></Route>
      </Routes>
      </BrowserRouter>
  )
}
