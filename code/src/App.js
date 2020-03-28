import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from 'pages/MovieList'
import { MovieDetail } from 'pages/MovieDetail'
import { DocuList } from 'pages/DocuList'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetail />
        </Route>
        <Route path="/docu" exact>
          <DocuList />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
