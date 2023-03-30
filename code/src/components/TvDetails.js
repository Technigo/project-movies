import React, { useEffect, useState } from 'react';
import { /* useNavigate, */ useParams } from 'react-router-dom';
import { SINGLE_TV_URL } from 'utils/urls';
import star from './assets/star.svg'

export const TvDetails = () => {
  /* const navigate = useNavigate(); */
  const [tv, setTv] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(SINGLE_TV_URL(id))
      .then((res) => res.json())
      .then((data) => setTv(data))
  }, [id])

  return (
    <div>
      {tv && (
        <div
          className="movie-backdrop"
          style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 80%), url(https://image.tmdb.org/t/p/w1280${tv.backdrop_path})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center' }}>
          <div className="details-wrapper">
            <img className="movie-poster-details" style={{ border: '5px solid white', marginTop: '80px', width: '70%' }} src={`https://image.tmdb.org/t/p/original${tv.poster_path}`} alt={tv.title} />
            <div
              className="poster-info"
              style={{ width: '90vw',
                display: 'flex',
                flexDirection: 'column' }}>
              <h2 style={{ margin: '0' }}>
                <span style={{ color: 'white' }}>{tv.title} <br /></span>
                <span style={{ color: 'white', marginLeft: '10px' }}>
                  {Math.round(tv.vote_average * 10) / 10}/10
                  <img src={star} className="star-icon" alt="a star" style={{ scale: '1.1', marginLeft: '5px' }} />

                </span>
              </h2>

              <p className="synopsis" style={{ color: 'white', fontWeight: 'bold', marginBottom: 0 }}>{tv.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>)
}