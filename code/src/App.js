import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { BASE_URL } from './utils/urls'

import { Header } from 'components/Header'
import Footer from 'components/Footer'
import MovieList from './pages/MovieList'
import MovieDetails from './pages/MovieDetails'
import MovieUpcoming from './pages/MovieUpcoming'
import NotFound from 'components/NotFound'

export const App = () => {

  return (
    <>
      <BrowserRouter>
          <Header /> 
          <Switch> {/* tells browserrouter to pick only one of the routes at a time*/}
            <Route exact path="/">
              <MovieList 
              />
            </Route>  
            <Route exact path="/upcoming">
              <MovieUpcoming 
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
