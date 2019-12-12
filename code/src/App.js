import React from 'react'
import { MovieList } from "pages/MovieList"
import { MovieDetails } from "pages/MovieDetails"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { NoMatch } from "pages/NoMatch"

import "./app.css"

// const api_key = "363444609247127238629594b245e069"
// // const url = "https://api.themoviedb.org/3/movie/550?api_key={api_key}"
// const urlList = "https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1"
// const urlDetails = "https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US"
//top rate= https://api.themoviedb.org/3/movie/top_rated?api_key=363444609247127238629594b245e069&language=en-US&page=1

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:id" exact>
          <MovieDetails />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

