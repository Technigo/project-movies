import React from 'react'
import { Route, Link } from 'react-router-dom'

import { ReactComponent as Mustache } from 'media/mustache.svg'

import './Header.css'

export const Header = () => {
  return (
    <header>
      <h1 className='page-title'>Epic mustaches movies list!</h1>
      <Route path='/movies'>
        <Link to="/">
          <div className='mustache-icon'><Mustache />
            <p className='go-back'>Go back to movies</p>
          </div>
        </Link>
      </Route>
    </header>
  )
}