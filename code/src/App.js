import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import List from "components/List"
import Details from "components/Details"
import { API_URL } from "utils/urls"

export const App = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setList(data.results))
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <List movies={list} />} />
        <Route path="/details/:movieId">
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
