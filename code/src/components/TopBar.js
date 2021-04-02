import React from 'react'
import { Link } from 'react-router-dom'

import NavBar from './NavBar'
import BackLink from 'components/BackLink'

const TopBar = ({ id }) => {

  return (
    <section className={`${id === undefined ? "top-bar-color" : "top-bar-transparant"}`}>
      <Link className="popflix-logo" to="/">
        <img src="/assets/logo-white.png" alt="Popflix logo" />
      </Link>
      {id === undefined ? <NavBar /> : <BackLink />}
    </section>
  )
}

export default TopBar
