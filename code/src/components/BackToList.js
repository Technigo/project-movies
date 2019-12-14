import React from 'react'
import { Link } from 'react-router-dom'
import './backtolist.css'

export const BackToList = () => {

  return (
    <section className="backWrapper">
      <Link to="/">
        <div className="backToList"><i className="fas fa-chevron-circle-left" /> Back to movies</div>
      </Link>
    </section >
  )
}