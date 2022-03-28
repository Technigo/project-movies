import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MAIN_URL } from './utils/urls'
import { MovieList } from 'Components/MovieList'
import { MovieDetails } from 'Components/MovieDetails'

export const App = () => {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    fetch(MAIN_URL).then(res => res.json()).then(data => setMovieList(data.results))
  }, [])

  console.log(movieList)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieList movieList = {movieList}/>}/>
        <Route path='/details/:moviename' element={<MovieDetails movieList={movieList}/>}/>
      </Routes>
    </BrowserRouter>
  )
}
