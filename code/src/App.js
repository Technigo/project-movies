import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { MOVIE_LIST_URL } from './url/url.js'
import PopularMoviesList from './pages/PopularMoviesList'
import Two from './components/Two'
import Error from 'components/Error.jsx'


export const App = () => {
  const [list, setList] = useState([]);

  useEffect(()=> {
    fetch(MOVIE_LIST_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setList(data.results);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<PopularMoviesList movies={list}/>}/>
        <Route path = "/two" element={<Two/>}/>
        <Route path ="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}
