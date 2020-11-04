import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { MovieList } from './MovieList'
import { MovieDetails } from './MovieDetails'


export const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const API_v3_KEY = 'f969c3f19f84733bab447597689e9ea0'
    const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_v3_KEY}`

    fetch(API_URL)
      .then((response) => {
        return response.json()
      })
      .then(json => {
        setMovies(json.results)
      })
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList movies={movies} />
        </Route>

        {
          movies.map(movie => {
            return (
              <Route key={movie.id} path={`/movies/${movie.title}`} exact>
                <MovieDetails {...movie} />
              </Route>
            )
          })
        }

      </Switch>
    </BrowserRouter>
  )
}
