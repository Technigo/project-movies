import React from 'react'
import { MovieList } from 'pages/MovieList'
import { MovieDetail } from 'pages/MovieDetail'
import { Nav } from 'components/Nav'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'pages/app.css'


export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
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
