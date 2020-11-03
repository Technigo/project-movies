import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { MovieList } from './MovieList'
import { MovieDetails } from './MovieDetails'

const API_v3_KEY = 'f969c3f19f84733bab447597689e9ea0'

export const App = () => {
  const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_v3_KEY}`
  const [movies, setMovies] = useState([])

  useEffect(() => {
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
          <MovieList movies={movies}/>
        </Route>
        
        {
          movies.map(movie => {
            return (
              <Route path={`/movies/${movie.title}`} exact>
                <MovieDetails key={movie.id} {...movie} />
              </Route>
            )
          })
        }

      </Switch>
    </BrowserRouter>
  )
}
