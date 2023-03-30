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
          <button type="button" onClick={backButton}>Movies</button>
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