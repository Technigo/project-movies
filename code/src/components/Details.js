import React, { useEffect, useState } from 'react';
import { /* useNavigate, */ useParams } from 'react-router-dom';
import { SINGLE_MOVIE_URL } from 'utils/urls';

export const Details = () => {
  /* const navigate = useNavigate(); */
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(SINGLE_MOVIE_URL(id))
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }, [id])

  /*   const onGoToNotFoundButtonClick = () => {
    navigate('/404');
  } */
  return (
    <div>
      {movie && (
        <div className="movie-backdrop" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
          <h2> <span>{movie.title}</span><span className="rating">{Math.round(movie.vote_average * 10) / 10}</span></h2>
          {/* <button type="button" onClick={onGoToNotFoundButtonClick}>Go to NotFound</button> */}
          <img className="movie-poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
          <p className="synopsis">{movie.overview}</p>
        </div>
      )}
    </div>)
}

export default Details;