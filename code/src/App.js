import React from 'react'
import { LIST_URL } from 'utils/urls'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import { useEffect, useState } from 'react'

export const App = () => {
  const [movieTitle, setMovieTitle] = useState([])

  useEffect(() => {
    fetchMovieTitle()
  }, [])

  const fetchMovieTitle = () => {
    fetch(LIST_URL)
      .then((res) => res.json())
      .then((data) => setMovieTitle(data.results))
  }

  return (
    <div className="movie-container">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {movieTitle.map((movie) => (
              <MovieList
                key={movie.id}
                poster={movie.poster_path}
                title={movie.original_title}
                date={movie.release_date}
                rating={movie.vote_average}
              />
            )
            )
            } </Route>
          <Route path='/details' component={MovieDetails} />
        </Switch>
      </BrowserRouter >
    </div>
  )
}

