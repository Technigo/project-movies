import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import List from 'pages/List';
import NotFound from 'components/NotFound';
import Details from 'pages/Details';

export const App = () => {
  return (
    <div className="outer-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/details/:movieId" element={<Details />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
