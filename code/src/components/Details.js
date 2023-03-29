import React, { useEffect, useState } from 'react';
import { /* useNavigate, */ useParams } from 'react-router-dom';
import { SINGLE_MOVIE_URL } from 'utils/urls';
import star from './assets/star.svg'

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
        <div
          className="movie-backdrop"
          style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
            height: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center' }}>
          <div className="details-wrapper" style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <img className="movie-poster" style={{ border: '5px solid white', marginTop: '80px', width: '70%' }} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
            <div style={{ width: '90vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center' }}>
              <h2>
                <span style={{ color: 'white' }}>{movie.title}</span>
                <span style={{ color: 'white', marginLeft: '10px' }}>
                  <img src={star} className="star-icon" alt="a star" style={{ scale: '1.1' }} />
                  {Math.round(movie.vote_average * 10) / 10}
                </span>
              </h2>

              <p className="synopsis" style={{ color: 'white' }}>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>)
}

export default Details;