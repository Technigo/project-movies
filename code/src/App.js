import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PopularMovieList } from './pages/PopularMovieList'
import { NowPlaying } from './pages/NowPlaying'
import { Upcoming } from './pages/Upcoming'
import { MovieDetail } from './pages/MovieDetail'
import { Navbar } from './components/Navbar'
import { Loading } from './components/Loading'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSpinner, faStar } from '@fortawesome/free-solid-svg-icons'
import { faClock as farClock, faStar as farStar } from '@fortawesome/free-regular-svg-icons'
library.add(fab, faSpinner, faStar, farClock, farStar)

export const App = () => {
  const apiKey = 'd6e700026d82752be03ea2fec6531439'
  const [header, setHeader] = useState()
  const [loading, setLoading] = useState(true)

  return (
    <BrowserRouter>
      <Navbar header={header} />
      <main>
        <Loading loading={loading} />
        <Switch>
          <Route path="/popular" exact>
            <PopularMovieList apiKey={apiKey} setHeader={setHeader} setLoading={setLoading} loading={loading} />
          </Route>
          <Route path="/nowplaying" exact>
            <NowPlaying apiKey={apiKey} setHeader={setHeader} setLoading={setLoading} loading={loading} />
          </Route>
          <Route path="/upcoming" exact>
            <Upcoming apiKey={apiKey} setHeader={setHeader} setLoading={setLoading} loading={loading} />
          </Route>
          <Route path="/movies/:movieId" exact>
            <MovieDetail apiKey={apiKey} setLoading={setLoading} loading={loading} />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
