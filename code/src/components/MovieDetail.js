/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import GoBack from './GoBack';
import Loading from './Loading';

const MovieDetail = () => {
  const [movieDetailList, setMovieDetailList] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9316509df2a80192a5e837648d693f17&language=en-US`)
      .then((res) => res.json())
      .then((json) => setMovieDetailList(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [id])

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