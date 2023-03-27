import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ONCINEMA_URL } from 'utils/Urls'

export const OnCinema = () => {
  const [onCinema, setOnCinema] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(ONCINEMA_URL)
      .then((res) => res.json())
      .then((json) => setOnCinema(json.results))
      .catch((error) => alert(error, 'error'))
      .finally(() => setLoading(false));
  }, [])

  if (loading) {
    return (
      <h2>Loading..</h2>
    )
  }

  return (
    <section className="onCinemaPage">
      <h1 className="on-cinema">On cinema right now</h1>
      <div className="movies-container">
        {onCinema.map((results) => (
          <article className="movie-wrapper" key={results.id}>
            <Link key={results.id} to={`/movies/${results.id}`}>
              <p>Add link key for release</p>
              <div className="details">
                <h1>{results.original_title}</h1>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}