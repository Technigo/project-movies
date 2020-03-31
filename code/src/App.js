import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { MovieList } from 'pages/MovieList'
import { MoviePage } from 'pages/MoviePage'
import { CompanyPage } from 'pages/CompanyPage'
import { About } from 'pages/About'
import { Error } from 'pages/Error'

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
        <Route path="/companies/:companyId">
          <CompanyPage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route>
          <Error path="/error" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
