import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export const Nav = () => {
  return (
    //a link to go home to MovieList
    <header>
      <Link className="homeLink" to ="/">
        <h1>HOME</h1>
      </Link>
    </header>
  )
}