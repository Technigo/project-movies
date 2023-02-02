
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
  // hellaoj */
  return (

    <section className="details-container">

      <img
        className="image-backdrop"
        src={movie.backdrop_path ? `${apiImageAddress}w1280${movie.backdrop_path}` : ''}
        alt="poster" />

      <button className="movie-button" type="button" onClick={onBackButtonClick}>⬅ Movies</button>

      <div className="movie-container">
        <div className="movie-poster">
          <img src={movie.poster_path ? `${apiImageAddress}w185${movie.poster_path}` : ''} alt="profile" />
        </div>
        <div className="movie-title">
          <h2>{movie.title}</h2>
          <div className="movie-rating"> {String(Math.round(movie.vote_average * 10) / 10)}⭐
          </div>
          <div className="movie-summary">
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </section>

  )
}
export default Details;

