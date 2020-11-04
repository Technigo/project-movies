import React from 'react'

import logo from '../img/popcorn.svg'

export const NavBar = () => {
  return (
    <div className="nav-bar"> 
      <h1><img src={logo} alt='popcorn'/> MOVIE TIME</h1>
    </div>
  )
}