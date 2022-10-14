import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import MovieDetails from './components/MovieDetails'
import NotFound from './components/NotFound'
import MainPage from './components/MainPage'

export const App = () => {
  return (
    <BrowserRouter>
      <section className="outerWrapper">
        <div className="innerWrapper">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/details/:id" element={<MovieDetails />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
}
