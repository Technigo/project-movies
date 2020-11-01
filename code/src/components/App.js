import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Nav } from './Nav.js'
import { MovieList } from './MovieList'
import { Movie } from './Movie'

import '../styles/app.css'

export const App = () => {
  return (
    //The BrowserRouter enables the usage of routes and links
    //The whole application should be wrapped in Browserrouter

    //The Route component enables one to choose which component should
    //be rendered when the url is at a specific path.

    //The Switch makes sure that only one Route is rendered at a time
    //When the firt Route that it comes across matches, it will stop looking for Routes.
    <BrowserRouter>
      <main className='app__grid'>
        <Nav />

        <Switch>
          <Route path='/' exact>
            <MovieList />
          </Route>
          <Route path='/movie' exact>
            <Movie />
          </Route>
          <Route path='/short' exact>
            <Movie />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>

  )
}
