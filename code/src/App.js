import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { MovieList } from "./pages/MovieList"
import { MovieDetail } from "./pages/MovieDetail"
import { ReactComponent as Logo } from "./icons/logoTMDB.svg"

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MovieList />
        </Route>
        <Route path='/movies/:id'>
          <MovieDetail />
        </Route>
      </Switch>
      <footer>
        <Logo className='logo' />
        This product uses the TMDb API but is not endorsed or certified by TMDb
      </footer>
    </BrowserRouter>
  )
}
