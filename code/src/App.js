import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { MovieDetails } from './Pages/MovieDetails'
import { API_KEY } from './utils/api'
import { MOVIES_URL, MOVIE_DETAILS_URL } from './utils/url'

export const App = () => {
  const [movies, setMovies] = useState()
  const [movieDetails, setMovieDetails] = useState()

  const fetchMovies = () => {
    fetch(MOVIES_URL(API_KEY))
      .then(response => response.json())
      .then(movies => setMovies(movies.results))
  }

  const fetchMovieDetails = (movie_id) => {
    fetch(MOVIE_DETAILS_URL(API_KEY, movie_id))
      .then(response => response.json())
      .then(movieDetails => setMovieDetails(movieDetails))
  }

  useEffect(fetchMovies, [])
  console.log(movieDetails)

  return (
    <BrowserRouter>
      <main className="main-container">
        <Switch>
          <Route path="/" exact>
            <Home movies={movies} fetchMovieDetails={fetchMovieDetails} />
          </Route>
          <Route path="/movie-details/:id" exact>
            <MovieDetails movies={movies} movieDetails={movieDetails} />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
