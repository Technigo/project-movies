import React from 'react'

export const Oncinema = () => {
  return (
    <section className="onCinemaPage">
      <h1 className="on-cinema">On cinema right now</h1>
      <div className="movies-container">
        <p>map cinema relases</p>
        <article className="movie-wrapper">
          <p>Add link key for release</p>
          <div className="details">
            <h1>Release details here</h1>
            <p>Release date here</p>
          </div>
        </article>
      </div>
    </section>
  )
}