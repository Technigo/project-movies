import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { NotFound } from './pages/NotFound'
import { MovieList } from './components/MovieList'
import { MoviesTop } from './components/MoviesTop'
import { MoviesSoon } from './components/MoviesSoon'
import { MovieDetail } from './pages/MovieDetail'

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />

      <main>
        <Switch>
          {/* default: now playing */}
          <Route path="/" exact>
            <MovieList />
          </Route>
          {/* top rated */}
          <Route path="/top">
            <MoviesTop />
          </Route>
          {/* coming soon */}
          <Route path="/soon">
            <MoviesSoon />
          </Route>

          <Route path="/movies/:id" exact>
            <MovieDetail />
          </Route>

          <Route path="/404">
            <NotFound />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </main>

      <Footer />
    </BrowserRouter>
  )
}