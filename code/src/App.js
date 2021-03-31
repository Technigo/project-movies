import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { MovieList } from "./pages/MovieList"


export const App = () => {
  return (
    <>
      <MovieList />
    </>
  )
} 
