import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Details } from "Pages/Details";
import { Movies } from "Pages/Movies";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
};
