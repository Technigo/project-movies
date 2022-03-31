import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import NotFond from "components/NotFond";
import { POPULAR_URL } from "./components/utils.js/Urls";
import LoadingSpinner from "./components/LoadingSpinner";
// import Footer from "./components/Footer";

export const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(POPULAR_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && <LoadingSpinner />}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<> {loading && <LoadingSpinner />} </>} /> */}
          <Route path="/" element={<MovieList movies={movieList} />} />
          <Route path="/MovieDetails/:movie_id" element={<MovieDetails />} />
          <Route path="/404" element={<NotFond />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};
