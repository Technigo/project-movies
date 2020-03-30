import React from 'react'
import { MovieList } from 'pages/MovieList'
import { BrowserRouter, Switch, route } from 'react-router-dom'


export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <route path="/" exact >
          <MovieList />
        </route>

      </Switch>
    </BrowserRouter>
  )
}
