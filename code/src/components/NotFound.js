import React from 'react'
import { Link } from 'react-router-dom'
import './notfound.css'

export const NotFound = () => {

  return (
    <section className="notFound">
      <h1>Page not found</h1>
      <Link to="/">
        <h2><i className="fas fa-chevron-circle-left" /> Back to list with movies</h2>
      </Link>
    </section >
  )
}