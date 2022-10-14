
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SINGLE_MOVIE_URL, apiImageAddress } from 'utils/urls';

const Details = () => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const onBackButtonClick = () => {
    navigate(-1);
  }
  useEffect(() => {
    setLoading(true);
    fetch(SINGLE_MOVIE_URL(id))
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [id])
  console.log(movie.title)

  if (loading) {
    return (
      <p>Page is loading...</p>
    );
  }

  return (
    <section className="details-container">
      <button type="button" onClick={onBackButtonClick}>Movies</button>
      <img src={movie.backdrop_path ? `${apiImageAddress}w1280${movie.backdrop_path}` : ''} alt="poster" />

      <div className="movie-info">
        <img src={movie.poster_path ? `${apiImageAddress}w185${movie.poster_path}` : ''} alt="profile" />
        <div className="movie-rating">
          <h1>{movie.title}</h1>
          <p>{movie.vote_average}</p>
        </div>
        <div className="movie-summary">
          <p>{movie.overview}</p>
        </div>
      </div>
    </section>
  )
}
export default Details;
