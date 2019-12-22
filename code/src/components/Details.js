import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {BackButton} from 'Icons/BackButton'
import 'css/details.css'

export const Details = () => {
    const [movies, setMovies] = useState()
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const [error, setError] = useState()
    const apiKey = '90c3a659c8de7934c5e0377754707bd6'

    useEffect (() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        .then(res => res.json())
      .then(json => {
        if (json.status_code === 34) {
          setError("movies not found")
        } else {
          setMovies(json)
        }
        setLoading(false)
        })
    }, [id])
    
    if (loading)
    return (
      <div>
        <Link className="backButton" to="/">
          <BackButton /> <p>Back</p>
        </Link>
        <h1 className="loading">Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div>
        <Link className="backButton" to="/">
          <BackButton /> <p>Back</p>
        </Link>
        <h1 className="sorry">Sorry! Cant Find Your movies</h1>
      </div>
    )

  return (
    <section>
      <Link className="backButton" to="/">
        <BackButton /> <p>Back</p>
      </Link>
      {movies && (
        <article
          className="background"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})`
          }}
        >
          <div className="summary">
            <img
              alt="poster"
              src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`}
            />
            <div className="details">
              <h1>
                {movies.title}
                <span className="rating">{movies.vote_average}/10</span>
              </h1>
              <p>{movies.overview}</p>
            </div>
          </div>
        </article>
      )}
    </section>
  )
}