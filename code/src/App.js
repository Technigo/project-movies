import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PopularList } from './PopularList'
import './app.css'
import { FilmDetails } from 'FilmDetails'
import { NavBar } from "./NavBar"
import { Recommended } from 'Recommended'
import { Reviews } from 'Reviews'


export const App = () => {
  const [films, setFilms] = useState([])
  const [recommendedFilms, setRecommendedFilms] = useState([])
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
            <FilmDetails films={films} setViewCount={setViewCount} recommendedFilms={recommendedFilms} />
          </Route>
          <Route path="/films/:title/recommended" exact>
            <Recommended films={films} recommendedFilms={recommendedFilms} setRecommendedFilms={setRecommendedFilms}
              setPageNumber={setPageNumber} pageNumber={pageNumber} />
          </Route>
          <Route path="/films/:title/reviews">
            <Reviews films={films} recommendedFilms={recommendedFilms} />
          </Route>
        </Switch>

      </main>
    </BrowserRouter>
  )

}
