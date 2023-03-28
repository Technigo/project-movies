import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState({})
  const navigate = useNavigate();
  const { movieID } = useParams()

  const onBackButtonClick = () => {
    navigate(-1);
  }

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
      style={{ backgroundImage: `url(${background})`,
        objectFit: 'fill',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center' }}>
      <button type="button" onClick={onBackButtonClick}>Back to the movies</button>
      <div>
        <h1>
          <span>{singleMovie.title} </span>
          <span>⭐ {singleMovie.vote_average}</span>
        </h1>
        {singleMovie.backdrop_path && <img className="movie-img" src={`https://image.tmdb.org/t/p/w1280${singleMovie.backdrop_path}`} alt={`${singleMovie.title}_image`} />}
        <p className="single-movie-page-overview">{singleMovie.overview}</p>
      </div>
    </div>
  )
}

export default SingleMovie;