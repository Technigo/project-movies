import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PopularList from "pages/PopularList";
import Details from "pages/Details";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularList />} />
        <Route path="/movies/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};
