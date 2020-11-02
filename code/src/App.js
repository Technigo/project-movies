import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { MovieList } from 'pages/MovieList'

export const App = () => {
  const [configuration, setConfiguration] = useState([])
  const API_KEY = 'e09a63c0dcf4e1007de642df9ee29784'
  const CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`

  useEffect(() => {
    fetch(CONFIG_URL)
    .then(res => res.json())
    .then(json => (
      setConfiguration(json.images)
    ))
  }, [])

  console.log(configuration)

  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path='/'>
            <MovieList apiKey={API_KEY} configuration={configuration}/>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
