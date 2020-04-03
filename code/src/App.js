import React from 'react'
import { MovieList } from 'pages/MovieList'
import { MovieDetail } from 'pages/MovieDetail'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'pages/app.css'


export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact >
            <MovieList />
          </Route>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
