import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { Home } from './Pages/Home'
import { Nav } from './Components/Nav'
import { MovieDetails } from './Pages/MovieDetails'
import { NotFound } from 'Pages/NotFound'

import { API_KEY } from './utils/api'
import { MOVIES_URL } from './utils/url'

export const App = () => {
  const [movies, setMovies] = useState()
  const [movieDetails, setMovieDetails] = useState()
  const [hasError, setHasError] = useState(false);

  const fetchMovies = () => {
    fetch(MOVIES_URL(API_KEY))
      .then(response => response.json())
      .then(movies => setMovies(movies.results))
      .catch((error) => {
        console.log('Error in Fetch:' + error.message);
      });
  }

  useEffect(fetchMovies, [])

  // Study Notes: 
  // Just for academic example I will keep one Route with render, and another one with open and closing tags
  // Option when no passing props <Route path="/" exact component={Home} /> 
  // 'exact' is just necesary when overlaping characteres like '/', do not overuse!

  return (
    <BrowserRouter>
      <Nav />
      <main className="main-container">
        <Switch>
          <Route path="/" exact render={() => <Home movies={movies} />} />
          <Route path="/movie-details/:id">
            <MovieDetails
              movies={movies}
              movieDetails={movieDetails}
              setMovieDetails={setMovieDetails}
              hasError={hasError}
              setHasError={setHasError} />
          </Route>
          <Route path="/NotFound" component={NotFound} />
          <Redirect to="/NotFound" />
        </Switch>
      </main>
    </BrowserRouter>
  )
}
