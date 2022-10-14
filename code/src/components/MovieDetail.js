/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GoBack from './GoBack';
import Loading from './Loading';
import NotFound from './NotFound';

const MovieDetail = () => {
  const [movieDetailList, setMovieDetailList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9316509df2a80192a5e837648d693f17&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        if (json.id) {
          setMovieDetailList(json);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      // .catch((error) => console.error(error))
      // .finally(() => setLoading(false))
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [id])

  if (error) {
    return <NotFound />;
  }

  return (
    <article
      className="movie-page"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(https://image.tmdb.org/t/p/w1280${movieDetailList.backdrop_path})` }}>
      {loading ? <Loading />
        : <>
          <GoBack />
          <div className="movie-detail-info">
            <img className="movie-poster" src={`http://image.tmdb.org/t/p/w342${movieDetailList.poster_path}`} alt={movieDetailList.original_title} />
            <div className="movie-info">
              <div className="rated-title">
                <h2>{movieDetailList.title} </h2>
                <p className="rating">⭐️ {Number(movieDetailList.vote_average).toFixed(1)}</p>
              </div>
              <p>{movieDetailList.overview}</p>
            </div>
          </div>
        </>}
    </article>

  )
}

export default MovieDetail;