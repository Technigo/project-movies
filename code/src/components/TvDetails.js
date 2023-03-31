/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SINGLE_TV_URL } from 'utils/urls';
import star from './assets/star.svg'

export const TvDetails = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const { id } = useParams();
  const [tv, setTv] = useState();

  useEffect(() => {
    fetch(SINGLE_TV_URL(id))
      .then((res) => res.json())
      .then((data) => setTv(data))
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
      {tv && (
        <div className="backdrop" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 80%), url(https://image.tmdb.org/t/p/w1280${tv.backdrop_path})` }}>
          <div className="details-wrapper">
            <img
              className="poster-details"
              src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
              alt={tv.title} />
            <div
              className="poster-info">
              <h2 style={{ margin: '0' }}>
                <span style={{ color: 'white' }}>{tv.title} <br /></span>
                <span style={{ color: 'white', marginLeft: '10px' }}>
                  {Math.round(tv.vote_average * 10) / 10}/10
                  <img
                    src={star}
                    className="star-icon"
                    alt="a star"
                    style={{ scale: '1.1', marginLeft: '5px' }} />
                </span>
              </h2>
              <p
                className="synopsis"
                style={{ color: 'white',
                  fontWeight: 'bold',
                  marginBottom: 0 }}>
                {tv.overview}
              </p>
            </div>
            {!showMoreInfo && ( // show moreBtn only if more info section is not displayed
              <button className="moreBtn" type="button" onClick={handleMoreBtnClick}>
                Show more
              </button>
            )}
            {showMoreInfo && ( // show more info section only if it is supposed to be displayed
              <div className="more-info-wrapper">
                <div className="more-info" onClick={handleMoreInfoClick}>
                  <p>On air:{'  '}{tv.first_air_date}{' '}-{' '}{tv.last_air_date}</p>
                  <p>In production:{'  '}{yesno(tv.in_production)}</p>
                  <p>Seasons:{'  '}{tv.number_of_seasons}</p>
                  <p>Total number of episodes:{' '}{tv.number_of_episodes}</p>
                  <p>Country of origin:{' '}{tv.origin_country}</p>
                  <p style={{ display: 'flex', flexDirection: 'column' }}>
                    Genre:{' '}{tv.genres.map((genres) => {
                      return <p style={{ margin: '5px' }}>{genres.name}</p>
                    })}
                  </p>
                  <p>Type:{' '}{tv.type}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
