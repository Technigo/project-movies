import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import MovieList from './pages/MovieList'
import MovieDetails from './pages/MovieDetails'

export const App = () => {
  const [movies, setMovies] = useState([])

  return (
    <BrowserRouter>
      <main className="main">
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/movies/:list" exact>
            <MovieList 
            movies={movies}
            setMovies={setMovies}
            />
          </Route>
          <Route path="/movies/:list/:id" exact>
            <MovieDetails />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
