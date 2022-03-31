import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Movies } from "Pages/Movies";
import { Details } from "Pages/Details";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/details/:detailsId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};
