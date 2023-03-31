/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PopularList } from './components/PopularList.js'
import { ShowMovie } from './components/ShowMovie'

export const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=5b17ba21606be74c35e11124051ec659&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setList(data.results))
      .catch((error) => console.error(error))
      .finally(() => console.log('movie list'))
  }, []);

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<PopularList movies={list} />} />
          <Route path="/showmovie/:id" element={<ShowMovie />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

