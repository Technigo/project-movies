import React, { useEffect, useState } from 'react'
import { MOVIES_URL } from 'utils/Urls';

export const StartPage = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch((error) => alert(error, 'error'))
      .finally(() => setLoading(false));
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <section className="startPage">
      <h1 className="popular">Popular movies</h1>
      <div className="movies-container">
        <p>Use map-props function here</p>
        <article className="movie-wrapper">
          <p>Post poster-path here and movie title here</p>
          <div className="details">
            <h2>title here</h2>
            <p>Released - post movie release date here</p>
          </div>
        </article>
      </div>
    </section>
  )
}