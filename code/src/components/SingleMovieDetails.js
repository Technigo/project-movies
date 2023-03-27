import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState({})
  const navigate = useNavigate();
  const { movieID } = useParams()
  console.log(useParams())

  const onBackButtonClick = () => {
    navigate(-1);
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=b3a14eb323759b106d94ec4c766dcb5e&language=en-US`)
      .then((res) => res.json())
      .then((data) => setSingleMovie(data))
    console.log(singleMovie)
  }, [movieID, singleMovie])

  return (
    <div>
      <button type="button" onClick={onBackButtonClick}>Back to the movies</button>
      <div key={singleMovie.id}>
        <h1>
          <span>{singleMovie.title} </span>
          <span>⭐ {singleMovie.vote_average.toFixed(1)}</span>
        </h1>
        <img className="movie-img" src={`https://image.tmdb.org/t/p/w1280${singleMovie.backdrop_path}`} alt={`${singleMovie.title}_image`} />
        <p>{singleMovie.overview}</p>
      </div>
    </div>
  )
}

export default SingleMovie;