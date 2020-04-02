import React from "react"
import { Route, Link } from "react-router-dom"
import "./nav.css"

export const Nav = () => {
  return (
    <header>
      <h1>Most popular movies in the US right now</h1>
      <Route path="/movie">
        <Link to="/">
          <span className="back-link">
            <i className="fas fa-arrow-circle-left"></i>
          </span>
          Back to list
        </Link>
      </Route>
    </header>
  )
}
