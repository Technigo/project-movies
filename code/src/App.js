import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PopularList } from './components/PopularList/PopularList';
import { NotFound } from './components/NotFound/NotFound';
import { SingleMovie } from './components/SingleMovie/SingleMovie';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularList />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404/" />} />
      </Routes>
    </BrowserRouter>
  );
};