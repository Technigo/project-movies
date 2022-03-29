import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from 'Components/Header'
import MovieList from 'Components/MovieList'
import MovieDetails from 'Components/MovieDetails'


export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
            <Route path='/' element={<MovieList />} />
            <Route path='/moviedetails/:movie-id' element={<MovieDetails />} />
            </Routes>
      </div>
    </BrowserRouter>
  )
}


