import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import Header from 'components/Header';//
import Library from 'components/Library';
import Details from 'components/Details';
import NotFound from 'components/NotFound';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Library library={Library} />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

// <Header />