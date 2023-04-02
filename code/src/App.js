import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MovieList } from 'Components/List'
import { Details } from 'Components/Details'
import './index.css';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}