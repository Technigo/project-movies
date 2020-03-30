/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from 'component/MovieList'
import { Movie } from 'component/Movie'

export const App = () => {
  return (
    // eslint-disable-next-line react/self-closing-comp
    <BrowserRouter>
      <main className="movieContainer">
        <Switch>
          
          <Route path="/" exact>
            <MovieList />
          </Route>

          <Route path="/movie/:id" exact>
            <Movie />
          </Route>

        </Switch>
      </main>
    </BrowserRouter>
  )
}
