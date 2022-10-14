import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Header } from 'components/Header';
import { MovieList } from 'pages/MovieList';
import { Details } from 'pages/Details';
import { NotFound } from 'components/NotFound';

export const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=012b5e0d6a17064c1b4e1d5d9021d5ae&language=en-US&page=1')
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
      <Header />
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
