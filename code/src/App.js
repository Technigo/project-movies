import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PopularMovieList } from './pages/PopularMovieList'
import { NowPlaying } from './pages/NowPlaying'
import { Upcoming } from './pages/Upcoming'
import { MovieDetail } from './pages/MovieDetail'
import { Navbar } from './components/Navbar'

export const App = () => {
  const apiKey = 'd6e700026d82752be03ea2fec6531439'
  const [header, setHeader] = useState()

  return (
    <BrowserRouter>
      <Navbar header={header} />
      <main>
        <Switch>
          <Route path="/" exact>
            <PopularMovieList apiKey={apiKey} setHeader={setHeader} />
          </Route>
          <Route path="/nowplaying" exact>
            <NowPlaying apiKey={apiKey} setHeader={setHeader} />
          </Route>
          <Route path="/upcoming" exact>
            <Upcoming apiKey={apiKey} setHeader={setHeader} />
          </Route>
          <Route path="/movies/:movieId" exact>
            <MovieDetail apiKey={apiKey} />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
