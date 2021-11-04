import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { BASE_URL } from './utils/urls'

import { Header } from 'components/Header'
import Footer from 'components/Footer'
import MovieList from './pages/MovieList'
import MovieDetails from './pages/MovieDetails'
import NotFound from 'components/NotFound'
import Spinner from 'components/Spinner'

export const App = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  /* Performanswise the fetch-request should be done in App.js, because it stays mounted like that. If it's done in the List.js, the fetch will happen every time the list gets mounted */
  useEffect(() => {
    setLoading(true)
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results)) 
      .finally(() => setLoading(false))
  }, []) 

  return (
    <>
      {loading && <Spinner />}
      <BrowserRouter>
        <Header /> 
          <Switch> {/* tells browserrouter to pick only one of the routes at a time*/}
            <Route exact path="/">
              <MovieList 
                movies = {movies}
              />
            </Route>  
            <Route path="/movies/:movieId" component={MovieDetails} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        {/* <Footer />   */}
      </BrowserRouter>
    </>  
  )
}
