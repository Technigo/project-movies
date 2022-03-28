import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PopularList from "Components/PopularList";
import Detail from "Components/Detail";


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularList />} />
        <Route exact path="/movies/:movieId" element={<Detail />}/>
      </Routes>
    </BrowserRouter>
  );
};
