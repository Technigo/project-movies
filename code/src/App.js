/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Details from 'components/Details';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to my app!</h1>} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
          <Link to="/details/123">
            <button type="button">Go to Details</button>
          </Link>
        </main>
      </BrowserRouter>
    </div>
  );
}
