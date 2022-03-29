import React from 'react';
import Main from 'Components/Main';
import Details from 'Components/Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />}></Route>
        <Route exact path='movie/:movieId' element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
