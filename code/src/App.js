import React, {useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Detail from './pages/Detail'
import MovieList from './pages/MovieList'
import Filter from './components/Filter'
import SimilarMovies from './pages/SimilarMovies'


export const App = () => {
  const [filterType, setFilterType] = useState("popular")

  const handleMovieFilter = (movieType) => {
    setFilterType(movieType)
  }

  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path='/'>
            <Filter 
              onMovieFilter = {handleMovieFilter}
            />
            <MovieList 
            filterType = {filterType}
            />
          </Route>
          <Route exact path='/movie/:id'>
            <Detail />
          </Route>

          <Route exact path='/similar/:id'>
            <SimilarMovies />
          </Route>

        </Switch>
      </main>
    </BrowserRouter>
  )
}
