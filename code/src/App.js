import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PopularList from "Components/PopularList";
import Detail from "Components/Detail";

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
      </Routes>
    </BrowserRouter>
  );
};
