import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import MovieList from 'Components/MovieList'
import MovieDetails from 'Components/MovieDetails'


export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
            <Route path='/' element={<MovieList />} />
            <Route path='/moviedetails/:movieId' element={<MovieDetails />} />
            </Routes>
      </div>
    </BrowserRouter>
  )
}


