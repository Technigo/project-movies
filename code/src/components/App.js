import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { Nav } from './Nav.js'
import { MovieList } from '../pages/MovieList'
import { MovieDetails } from '../pages/MovieDetails'
import { NotFound } from '../pages/NotFound'

import '../styles/app.css'

export const App = () => {
  return (
    /* To include: combining useEffect and useState with using API's in react
To use placeholders in urls to pick dynamic parts from urls
To use React Router to create multi-page applications 

ADD MOVIEDETAILS PAGE WITH DETAILS ABOUT MOVIE*/

    //The BrowserRouter enables the usage of routes and links
    //The whole application should be wrapped in Browserrouter

    //The Route component enables one to choose which component should
    //be rendered when the url is at a specific path.

    //The Switch makes sure that only one Route is rendered at a time
    //When the first Route that it comes across matches, it will stop looking for other URLs.
    <BrowserRouter>
      <main className='app__grid'>
        <Nav />

        <Switch>
          <Route path='/' exact>
            <MovieList />
          </Route>
          <Route path='/movie/:movieId' exact>
            <MovieDetails />
          </Route>
          <Route path='/404' exact>
            <NotFound />
          </Route>
          <Redirect to='/404' />
        </Switch>
      </main>
    </BrowserRouter>
  )
}
