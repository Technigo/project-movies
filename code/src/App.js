import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import MovieList from 'Components/MovieList'
import MovieDetails from 'Components/MovieDetails'
import Error from 'Components/Error'


export const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Routes>
            <Route path='/' element={<MovieList />} />
            <Route path='/moviedetails/:movieId' element={<MovieDetails />} />
            <Route path='*' element={<Error />} />
            </Routes>
      </div>
    </BrowserRouter>
  )
}


