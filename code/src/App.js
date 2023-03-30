/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Details from 'components/Details';

export const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [details, setDetails] = useState();

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=39168ef639d8a2d49b6d7a9893ad1b8c&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setMovieList(data.results));
  }, []);

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
