import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SINGLE_MOVIE_URL } from 'utils/urls.js';

export const Details = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  useEffect(() => {
    fetch(SINGLE_MOVIE_URL(id))
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
      })
  }, [id])

  console.log(details)

  return (
    <>
      <button className="backButton" type="button" onClick={goBack}><span className="arrow" /> Go back</button>
      <div className="detailPage" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>

        <div className="detailBox">
          <img className="detailPoster" src={`http://image.tmdb.org/t/p/w342/${details.poster_path}`} alt="poster" />
          <h1 className="detailTitle">{details.title}</h1>
          <p className="detailScore">⭐ {Math.round(details.vote_average * 10) / 10}</p>
          <p className="detailOverview">{details.overview}</p>
        </div>
      </div>
    </>
  )
}