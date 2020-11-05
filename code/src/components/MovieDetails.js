import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const MovieDetails = () => {
  const [details, setDetails] = useState([])
  const { movieId } = useParams()
  // the same id from the app.js Route path. Sam in the fetch request too to fetch only details about one single movie


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e644b2b8739cf7b05450ed105d6749a6&language=en-US&page=1`)
      .then((response) => response.json())
      .then((json) => {
        setDetails(json)
      })
  }, [movieId])
  // the movieId is paste inside the [] so it won't change and run again - as it would do if we didn't copy it in there


  return (
    <>
      <Link to={`/movies${details.id}`}>
        <section className="details-site">
          <img className="movie-background"
            src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`}
            alt={details.id}>
          </img>
          <img className="movie-post"
            src={`https://image.tmdb.org/t/p/w1280${details.poster_path}`}
            alt={details.id}>
          </img>
          <div className="detail-text">
            <h1>{details.title}</h1>
            <p className="vote-count">{details.vote_count}/10</p>
          </div>
          <div className="overview-text">
            <p>{details.overview}</p>
          </div>
        </section>
      </Link>

    </>
  )
}

