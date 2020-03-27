import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PopularList } from './pages/PopularList'
import { TopRated } from './pages/TopRated'
import { MovieDetails } from './pages/MovieDetails'
import { NavBar } from './components/NavBar'
import { NowPlaying } from './pages/NowPlaying'
import { Upcoming } from './pages/Upcoming'
import './app.css'

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" exact>
            <PopularList />
          </Route>
          <Route path="/top_rated" exact>
            <TopRated />
          </Route>
          <Route path="/now_playing" exact>
            <NowPlaying />
          </Route>
          <Route path="/upcoming" exact>
            <Upcoming />
          </Route>
          <Route path="/movies/:id" exact>
            <MovieDetails />
          </Route>
        </Switch>
      </main>
      <footer>Anne-Sophie Gendron - Technigo bootcamp 2020</footer>
    </BrowserRouter>
  )
}
