import React from 'react'
import { Link } from "react-router-dom"

import { ReactComponent as Error } from "media/404_error.svg"
import { ReactComponent as Mustache } from "media/mustache.svg"

import './PageNotFound.css'

export const PageNotFound = () => {
  return (
    <section className='not-found-wrapper'>
      <h1 className='not-found-title'>This is not the movies you are looking for...</h1>
      <div className='error-icon'><Error /></div>
      <Link to={"/"}>
      <span className='mustache-icon'><Mustache /><p className='go-back'>Go back to movies</p></span>
        </Link>
    </section>
  )
}