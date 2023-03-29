// /////////////// IMPORT //////////////////////// //

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MovieInfoPage } from './Components/MovieInfoPage/MovieInfoPage';
import { MovieList } from './Components/MovieList/MovieList';
// import { NotFound } from './Components/NotFound/NotFound';

// /////////////// MAIN APP //////////////////////// //

// <BrowserRouter> = All linked components goes here.
// Outside you put things like a NAVBAR that will be there all the time.
// <Routes> = This tag is needed for plural components.
// <Route> = Is the single component an were you write the path and the element.

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/MovieInfoPage/:id" element={<MovieInfoPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
