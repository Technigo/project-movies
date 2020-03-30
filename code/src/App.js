import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { MovieList } from 'pages/MovieList'
import { MoviePage } from 'pages/MoviePage'
import { About } from 'pages/About'

export const App = () => {
  const [movieList, setMovieList] = useState(137418)
  const selectMovieList = selectedList => {
    setMovieList(selectedList)
  }

  return (
    <BrowserRouter>
      <Nav selectMovieList={selectMovieList} />
      <Switch>
        <Route path="/" exact>
          <MovieList movieList={movieList} />
        </Route>
        <Route path="/movies/:movieId">
          <MoviePage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
