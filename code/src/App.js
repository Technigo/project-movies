import { React } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { List } from 'components/List'
import NotFound from 'components/NotFound';
import { Details } from 'components/Details';

import Footer from 'components/Footer';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/details/:movieId" element={<Details />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}