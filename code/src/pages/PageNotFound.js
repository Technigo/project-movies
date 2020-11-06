import React from 'react'

import { Footer } from 'components/Footer'

import { ReactComponent as Error } from "media/404_error.svg"


import './PageNotFound.css'

export const PageNotFound = () => {
  return (
    <>
    <section className='not-found-wrapper'>
      <h1 className='not-found-title'>This is not the movies you are looking for...</h1>
      <div className='error-icon'><Error /></div>
    </section>
    <Footer />
    </>
  )
}