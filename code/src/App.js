/* eslint-disable operator-linebreak */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Details from 'components/Details';
import NotFound from 'components/NotFound';
// import Header from 'components/Header';
import { List } from 'components/List';

export const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/details/:movieId" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};
