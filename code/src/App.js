import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from 'Components/Header'
import MovieList from 'Components/MovieList'
import MovieDetails from 'Components/MovieDetails'


export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
            <Route path='/'>
              <MovieList />
            </Route> 
            <Route path='/moviedetails'>
              <MovieDetails />
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}


