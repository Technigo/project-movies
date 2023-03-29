import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from 'components/NotFound';
import TrendingList from 'components/TrendingList';
import SingleMovie from 'components/SingleMovie';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TrendingList />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
