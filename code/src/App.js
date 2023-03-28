import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './Homepage/Homepage';
import NotFound from './NotFound/NotFound';
import MovieInfoPage from './MovieInfoPage/MovieInfoPage';

// <BrowserRouter> = All linked components goes here.
// Outside you put things like a NAVBAR that will be there all the time.
// <Routes> = This tag is needed for plural components.
// <Route> = Is the single component an were you write the path and the element.

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/MovieInfoPage" element={<MovieInfoPage />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
