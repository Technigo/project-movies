import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header } from 'components/Header'
import { MovieList } from 'pages/MovieList'
import { MovieDetails } from 'pages/MovieDetails'
import { Footer } from 'components/Footer'


export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
      <Switch>
        <Route path='/' exact>
          <MovieList />
        </Route>
        <Route path='/movies/:id'>
          <MovieDetails />
        </Route>
      </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
