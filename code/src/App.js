import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PopularList } from 'pages/PopularList'
import { Detail } from 'pages/Detail'

//Page/Component: Popular list that maps all the popular movies from API
//Page/Component: Detail that renders details about the movie (poster, info, voting)

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route path="/" exact>
            <PopularList />
          </Route>

          <Route path="/movies/:id">
            <Detail />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  )
}
