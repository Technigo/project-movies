import React, {useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import List from './components/List'
import Movie from './components/Movie'
import { API_URL } from 'utils/urls'

export const App = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setList(data.results))
  }, [])
  console.log(list)

  return (
    <>
    <BrowserRouter>
     <Switch>
        <Route exact path="/">
          <List movies={list}/>
        </Route>
        <Route path='/movie/:movieId'>
          <Movie />
        </Route>
     </Switch>
    </BrowserRouter>
    </>
  )
}
