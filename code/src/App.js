import React from 'react'
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'


import { MovieList } from 'componet/MovieList'
import { MovieDetail } from 'pages/MovieDetail'
import { NotFound404 } from 'componet/NotFound404'

export const App = () => {

  return (
    <BrowserRouter>
      <main>
        <Switch>

          {/* Show movielist */}
          <Route path="/" exact>
            <Redirect to="/popular"/>
          </Route>
          <Route path="/popular" exact>
            <MovieList list={'popular'}/>
          </Route>
          <Route path="/now-playing" exact>
            <MovieList  list={'now_playing'}/>
          </Route>
          <Route path="/upcoming" exact>
            <MovieList list={'upcoming'}/>
          </Route>

          {/* Show details componet */}
          <Route path="/movies/:id" exact>
            <MovieDetail />
          </Route>

          {/* Not Found path */}
          <Route path="/404">
            <NotFound404 />
          </Route>

          {/* When no url is correct, it redirects to 404 page */}
          <Redirect to="/404"/>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
