import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MoviesList } from 'pages/MoviesList'
import { Detail } from 'pages/Detail'

export const App = () => (
  <Router>
    <Route path="/" exact>
      <MoviesList />
    </Route>
    <Route path="/now_playing" exact>
      <MoviesList>now_playing</MoviesList>
    </Route>
    <Route path="/top_rated" exact>
      <MoviesList>top_rated</MoviesList>
    </Route>
    <Route path="/upcoming" exact>
      <MoviesList>upcoming</MoviesList>
    </Route>
    <Route path="/movies/:id">
      <Detail />
    </Route>
  </Router>
)