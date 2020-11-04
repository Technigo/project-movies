import React from 'react'
import { Link } from "react-router-dom"

import { ReactComponent as Error } from "media/404_error.svg"

import './PageNotFound.css'

export const PageNotFound = () => {
  return (
    <section className='not-found-wrapper'>
      <h1 className='not-found-title'>This is not the movies you are looking for...</h1>
      <div className='error-icon'><Error /></div>
      <div className="back-button">
      <Link to={"/"}>
        {/* Add moustasch image here */}
      <p className='go-back'>Go back to movies</p>
        </Link>
      </div>
    </section>
  )
}