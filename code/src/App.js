import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MoviesOverview from './Components/MoviesOverview.js'
import MovieDetails from './Components/MovieDetails.js'

const POSTERSIZE = 'w500'
const BACKDROPSIZE = 'w1280'
const APIKEY = process.env.REACT_APP_MOVIEDB_APIKEY;

export const App = () => {
  
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      console.log(json.results)
      setMovies(json.results)
    })
  }, [])
  
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path='/' exact>
            <MoviesOverview movies={movies} posterSize={POSTERSIZE}/>
          </Route>
          <Route path={`/movies/:movieId`} exact>
            <MovieDetails backdropSize={BACKDROPSIZE}/>
          </Route>
        </Switch>
        </main>
    </BrowserRouter>
  )
}
