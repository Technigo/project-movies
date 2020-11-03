import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import { MovieList } from 'components/MovieList'
import { MovieDetails } from 'components/MovieDetails'


export const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <MovieList />
      </Route>
      <Route path="/movies/:id">
          <MovieDetails />
        </Route>
    </BrowserRouter>
  )
}
