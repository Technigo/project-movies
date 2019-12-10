import React from 'react'
import { Route, Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <section className="nav-link">
      <Route path="/movies/:id">
        <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
          <span role="img" aria-label="movieprojector">🎥</span> Movies
        </Link>
      </Route>
    </section>
  )
}