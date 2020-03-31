import React from 'react'


export const Movie = ({ movieDetails }) => {
  const imgBaseUrl = 'https://image.tmdb.org/t/p'

  return (

    <section
      className="movie-details"
      style={{
        backgroundImage: `url(${imgBaseUrl}/w1280/${movieDetails.backdrop_path})`
      }}>
      <div className="container">

        <div className="movie-details-img">
          <img src={`${imgBaseUrl}/w342/${movieDetails.poster_path}`} alt={`${movieDetails.title} Poster`} ></img>
        </div>

        <article className="movie-details-info">
          <h1>{movieDetails.title}</h1>
          <span className="rating">–– {movieDetails.vote_average}</span>
          <p>{movieDetails.overview}</p>
        </article>

      </div>
    </section>

  )
}
