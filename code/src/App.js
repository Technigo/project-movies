import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieList from "components/MovieList";
import MovieDetails from "components/MovieDetails";
import { GlobalStyle } from "styles";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
