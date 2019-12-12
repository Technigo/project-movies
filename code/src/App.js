import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { MovieList } from "pages/MovieList"
import { MovieDetail } from "pages/MovieDetail"
import { SimilarMovies } from "pages/SimilarMovies"
import { Nav } from "pages/Nav"
import "./App.css"


export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/popular">
          <MovieList category="popular" />
        </Route>
        <Route path="/upcoming">
          <MovieList category="upcoming" />
        </Route>
        <Route path="/top_rated">
          <MovieList category="top_rated" />
        </Route>
        <Route path="/movies/:id">
          <MovieDetail />
        </Route>
        <Route path="/similar/:id">
          <SimilarMovies />
        </Route>
      </Switch>


    </BrowserRouter>

  )
}
