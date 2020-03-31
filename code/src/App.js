import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { MovieList } from 'pages/MovieList'
import { MoviePage } from 'pages/MoviePage'
import { CompanyPage } from 'pages/CompanyPage'
import { About } from 'pages/About'

export const App = () => {
  const [movieList, setMovieList] = useState(137418) //Used to store selected movie list passed as props to MovieList
  const selectMovieList = selectedList => {
    setMovieList(selectedList) //Updates chosen list based on selection made in Nav
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
      </Switch>

    </BrowserRouter>
  )
}
