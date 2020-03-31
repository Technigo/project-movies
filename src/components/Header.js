import React from 'react'
import "components/header.css"
import { Link } from "react-router-dom"



export const Header = () => {

  return (
    <section className="header">
      <h1>Popular Movies with Giovanni Ribisi</h1>
      <Link className="about" to={'/'}>
        <p>About Giovanni</p>
      </Link>
    </section>
  )
}