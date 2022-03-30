import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { POPULAR_URL } from "./components/utils.js/Urls";
import MovieList from "./components/MovieList";
// import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";

export const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(POPULAR_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList movies={movieList} />} />
        <Route path="/MovieDetails/:movie_id" element={<MovieDetails />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};
