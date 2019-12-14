import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from 'pages/MovieList'
import { MovieDetails } from 'pages/MovieDetails'
import { ProductionCompany } from 'pages/ProductionCompany'

//Navigation bar component only shown at list page - not in details
//Choosing a list sets a state to use in fetch url (to fetch popular, top_rated or upcoming)
//Page component: Movie list that maps all the movies from API
//Page component: MovieDetails that renders details about the movie
//Page component: ProductionCompany that show detail about a company

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route path="/" exact>
            <MovieList />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetails />
          </Route>

          <Route path="/company/:companyId">
            <ProductionCompany />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  )
}
