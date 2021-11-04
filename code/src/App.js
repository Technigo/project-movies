import React, {useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import List from './components/List'
import Movie from './components/Movie'
import Loader from './components/Loader'
import NotFound from 'components/NotFound'

import { API_URL } from 'utils/urls'

export const App = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setList(data.results))
    .finally(() => setLoading(false))
  }, [])

  return (
    <>
    <BrowserRouter>
    {loading && <Loader />}
     <Switch>
        <Route exact path="/">
          <List movies={list}/>
        </Route>
        <Route exact path='/movie/:movieId'>
          <Movie />
        </Route>
        <Route>
          <NotFound />
        </Route>
     </Switch>
    </BrowserRouter>
    </>
  )
}
