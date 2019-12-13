import React from "react"
import { Link } from 'react-router-dom'
import "./notFound.css"

export const NotFound = (props) => {
  return (
    <section className="not-found">
      <h1 className="not-found-title">Not found</h1>
      <p className="not-found-message">
        Sorry, we can't find the movie you were looking for.
      </p>
      <Link to="/" className="return-link">
        Movies
      </Link>
    </section>
  )
}