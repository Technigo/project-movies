import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import BackButton from './BackButton'

const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState({})
  const { movieID } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=b3a14eb323759b106d94ec4c766dcb5e&language=en-US`)
      .then((res) => res.json())
      .then((data) => setSingleMovie(data))
  }, [movieID])
  const background = `https://image.tmdb.org/t/p/w1280${singleMovie.backdrop_path}`
  return (
    <div
      key={singleMovie.id}
      className="single-movie-page"
      style={{ backgroundImage: `url(${background})` }}>
      <BackButton />
      <div className="single-movie-page-details">
        <div className="single-movie-page-img-container">
          {singleMovie.backdrop_path && <img className="movie-img" src={`https://image.tmdb.org/t/p/w780${singleMovie.poster_path}`} alt={`${singleMovie.title}_image`} />}
          <p className="single-movie-page-rating">⭐ {Math.round(singleMovie.vote_average * 10) / 10}</p>
        </div>
        <div className="single-movie-page-text-container">
          <h1 className="single-movie-page-title">
            {singleMovie.title}
          </h1>
          <p className="single-movie-page-overview">{singleMovie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleMovie;