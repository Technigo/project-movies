import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PopularList } from './PopularList'
import './app.css'
import { FilmDetails } from 'FilmDetails'
import { NavBar } from "./NavBar"


export const App = () => {
  const [films, setFilms] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [api, setApi] = useState('popular')
  const [viewCount, setViewCount] = useState(+localStorage.getItem('viewCount') || 0)
  return (
    <BrowserRouter>

      <NavBar api={api} setApi={setApi} pageNumber={pageNumber} setPageNumber={setPageNumber} viewCount={viewCount} />
      <main>

        <Switch>
          <Route path="/" exact>
            <PopularList films={films} setFilms={setFilms} api={api} pageNumber={pageNumber} />
          </Route>
          <Route path="/films/:title" exact>
            <FilmDetails films={films} setViewCount={setViewCount} />
          </Route>
        </Switch>

      </main>
    </BrowserRouter>
  )

}
