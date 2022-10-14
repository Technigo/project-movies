import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { MovieList } from 'pages/MovieList';
import { Details } from 'pages/Details';
import { NotFound } from 'components/NotFound';
import { LIST_URL } from 'utils/urls.js';

export const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(LIST_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  if (loading) {
    return (
      <p>Loading loading ... </p>
    );
  }

  console.log(movieList)

  return (

    <BrowserRouter>
      <section className="outerWrapper">
        <div className="innerWrapper">
          <Routes>
            <Route path="/" element={<MovieList movieList={movieList} />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </div>
      </section>

    </BrowserRouter>
  );
}
