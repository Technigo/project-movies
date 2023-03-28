/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PopularList } from './components/PopularList';
import { Detail } from './components/Detail';

export const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState();
  const fetchList = () => {
    setLoading(true);
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=04bc807ce2dc2489cded23df879f93ba&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    fetchList()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularList />} />
        <Route path="/movies/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
