import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PopularList from "Components/PopularList";
import Detail from "Components/Detail";
import NotFound from "Components/NotFound";

import { LIST_URL } from "utils/urls";


export const App = () => {

  const [movie,setMovie] = useState([])

  
  useEffect(() => {
    fetch(LIST_URL)
    .then(res => res.json())
    .then(data=> setMovie(data.results))

}, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularList movielist={movie} />} />
        <Route path="/movie/:movieId" element={<Detail />}/>
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};
