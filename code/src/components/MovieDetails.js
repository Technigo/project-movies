/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { /* useNavigate, */ useParams } from 'react-router-dom';
import { SINGLE_MOVIE_URL } from 'utils/urls';
import star from './assets/star.svg'

export const MovieDetails = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(SINGLE_MOVIE_URL(id))
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }, [id])

  const handleMoreBtnClick = () => {
    setShowMoreInfo(true); // set state to show more info section
  }

  const handleMoreInfoClick = () => {
    setShowMoreInfo(false); // set state to hide more info section
  }

  const yesno = (value) => {
    return value ? 'yes' : 'no';
  }

  return (
    <div>
      {movie && (
        <div
          className="backdrop"
          style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 80%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
          <div className="details-wrapper">
            <img
              className="poster-details"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title} />
            <div
              className="poster-info">
              <h2 style={{ margin: '0' }}>
                <span style={{ color: 'white' }}>{movie.title} <br /></span>
                <span style={{ color: 'white', marginLeft: '10px' }}>
                  {Math.round(movie.vote_average * 10) / 10}/10
                  <img src={star} className="star-icon" alt="a star" style={{ scale: '1.1', marginLeft: '5px' }} />
                </span>
              </h2>
              <p className="synopsis" style={{ color: 'white', fontWeight: 'bold', marginBottom: 0 }}>{movie.overview}</p>
            </div>
            {!showMoreInfo && ( // show moreBtn only if more info section is not displayed
              <button className="moreBtn" type="button" onClick={handleMoreBtnClick}>
                Show more
              </button>
            )}
            {showMoreInfo && ( // show more info section only if it is supposed to be displayed
              <div className="more-info-wrapper">
                <div className="more-info" onClick={handleMoreInfoClick}>
                  <p>Release date:{'  '}{movie.release_date}</p>
                  <p>Runtime:{'  '}{movie.runtime}</p>
                  <p>Part of a collection:{'  '}{yesno(movie.belongs_to_collection)}</p>
                  <p>Budget:{'  '}{movie.budget}{' '}$</p>
                  <p>Revenue:{'  '}{movie.revenue}</p>
                  <p>Country of origin:{' '}{movie.origin_country}</p>
                  <p style={{ display: 'flex', flexDirection: 'column' }}>
                    Genre:{' '}{movie.genres.map((genres) => {
                      return <p style={{ margin: '5px' }}>{genres.name}</p>
                    })}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>)
}