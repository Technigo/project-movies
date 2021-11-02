import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { API_URL } from "./utils/urls"

import MovieList from "./components/MovieList"
import MovieDetails from "./components/MovieDetails"
import Header from "components/Header"

export const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
  }

  console.log("APP API INFO HERE: ", movies)

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <MovieList movies={movies} />} />
          <Route path="/movies/:info" component={MovieDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
