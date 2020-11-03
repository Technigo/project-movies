import React from 'react'
// import { Route } from "react-router-dom"
import { MovieList } from 'components/MovieList'

export const App = () => {
  return (
    <div>
      {/* <Route path="/" exact> */}
      <MovieList />
      {/* </Route> */}
    </div>
  )
}
