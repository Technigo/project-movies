import React from 'react'
import { Link, Route } from 'react-router-dom'

import NavBar from './NavBar'
import BackLink from 'components/BackLink'

const TopBar = ({ id, chosenList }) => {
  console.log(chosenList)

  return (
    <section className={`${id === undefined ? "top-bar-color" : "top-bar-transparant"}`}>
      <Link className="popflix-logo" to="/">
        <img src="/assets/logo-white.png" alt="Popflix logo" />
      </Link>
      {id === undefined ? <NavBar /> : <BackLink chosenList={chosenList} />}
    </section>
  )
}

export default TopBar
