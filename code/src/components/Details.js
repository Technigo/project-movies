/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const backButton = () => {
    navigate(-1);
  }
  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=95ef8b2227f45566b4eecd3687c10466&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
      })
      .catch((error) => {
        console.log(error)
        navigate('/404')
      })
      .finally(() => {
        setLoading(false);
      })
  }, [id, navigate])
  if (loading) {
    return (
      <p>Loading...</p>
    )
  }
  return (
    <section className="details-page">
      {details && (
        <div
          className="backdrop"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})`
          }}>
          <button type="button" onClick={backButton} className="movies-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"> <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="currentColor" fillRule="evenodd" /></svg>
            Movies
          </button>
          <div className="details-wrapper">
            <div className="poster">
              <img alt={details} src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} />
            </div>
            <div className="details-txt">
              <h2 className="movie-title">{details.original_title}</h2>
              <p>{details.overview}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}