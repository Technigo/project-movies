import React, { useEffect, useState } from 'react'
import { TVSHOW_URL } from 'utils/Urls'

export const TVseries = () => {
  const [tvShow, setTvShow] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(TVSHOW_URL)
      .then((res) => res.json())
      .then((json) => setTvShow(json.results))
      .catch((error) => alert(error, 'error'))
      .finally(() => setLoading(false));
  }, [])

  if (loading) {
    return (
      <h2>Loading..</h2>
    )
  }

  return (
    <section className="tvSeriesPage">
      <h1 className="popular">Popular TV-series</h1>
      <div className="movies-container">
        {tvShow.map((show) => (
          <article clasName="movie-wrapper" key={show.id}>
            <div className="details">
              <h1>{show.name}</h1>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}