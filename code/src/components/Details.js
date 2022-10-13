
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const onBackButtonClick = () => {
    navigate(-1);
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b030ab3fe4dfd1006bfff2534c26631&language=en-US`)
      .then((res) => res.json())
      .then((json) => setMovie(json))
  }, [id])

  return (
    <section className="details-container">
      <button type="button" onClick={onBackButtonClick}>Movies</button>
      <img src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt="poster" />
      <div className="movie-info">
        <div className="movie-rating">
          <h1>{movie.title}</h1>
          <p>{movie.vote_average}</p>
        </div>
        <p>{movie.overview}</p>
      </div>
    </section>
  )
}

export default Details;

// Movie details second page with a back button