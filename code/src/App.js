import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import List from "components/List"
import Details from "components/Details"
import Loader from "./components/Loader"
import { API_URL } from "utils/urls"

export const App = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setList(data.results))
      .finally(() => setLoading(false))
  }, [])

  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Switch>
        <Route exact path="/" render={() => <List movies={list} />} />
        <Route path="/details/:movieId">
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
