import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PopularList from "pages/PopularList";
import Detail from "pages/Detail";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key={cc4becdbb6d0da08f37297393736b428}&language=en-US&page=1";
const API_ID =
  "https://api.themoviedb.org/3/movie/{movie_id}?api_key={cc4becdbb6d0da08f37297393736b428}&language=en-US";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularList />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
