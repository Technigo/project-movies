import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.css'

export const NotFound = () => {
  return(
    <section className='not-found-wrapper'>
      <h2>
        404. Page Not Found.
      </h2>
      <p>
        Sorry, we can't find the page you're looking for.
      </p>
      <Link to='/'>
        <button>
          Visit homepage
        </button>
      </Link>
    </section>
  )
}