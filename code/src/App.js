import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Header from 'components/Header';
import List from 'pages/List';
// import Contact from 'components/Contact';
import NotFound from 'components/NotFound';
import Details from 'pages/Details';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/details/:movieName" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
