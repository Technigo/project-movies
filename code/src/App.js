// /////////////////////// IMPORTS //////////////////////////////////////////////// //

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MovieInfoPage } from './Components/MovieInfoPage/MovieInfoPage';
import { MovieList } from './Components/MovieList/MovieList';
import { NotFound } from './Components/NotFound/NotFound';

// /////////////////////// MAIN APP //////////////////////////////////////////////// //

// The App function creates and sets the Routes for this site.

// Tags explained:
// <BrowserRouter> = All linked components goes here.
// Outside you put things like a NAVBAR (if you have one) that will be there all the time.
// <Routes> = This tag is needed for plural components.
// <Route> = Is the single component an were you write the path and the element.

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/MovieInfoPage/:id" element={<MovieInfoPage />} /> {/* Here we make a page for all uniq ID´s in the array */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
