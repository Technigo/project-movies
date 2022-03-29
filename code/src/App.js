import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { API_URL } from "./Utils/Url";
import Movielist from "./Components/Movielist";
import Moviedetails from "Components/Moviedetails";

export const App = () => {
  const [list, setList] = useState([]);
  const fetchMovies = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setList(data.results));
  };
  useEffect(() => {
    fetchMovies(API_URL);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movielist lists={list} />} />
        <Route path="/movies/:id" element={<Moviedetails />} />
      </Routes>
    </BrowserRouter>
  );
};
