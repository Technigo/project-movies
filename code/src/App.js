import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './sites/HomePage';
import { ProductPage } from './sites/ProductPage';

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:slug" element={<ProductPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
