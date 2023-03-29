import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from 'components/NotFound';
import { Movies } from 'components/Movies';
import Details from 'components/Details';

export const App = () => {
  return (
    <BrowserRouter className="Main-container">
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/details/:movieInfo" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
