import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { NotFound } from './NotFound';

export const TvseriesDetails = () => {
  const [details, setDetails] = useState([])
  const { id } = useParams()

  const fetchTvDetails = () => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=7f5b30559b3d85aec06d3d1a010f4a39&language=en-US`)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => {
        console.log(error)
        if (error) {
          return (<NotFound />

          )
        }
      })
  }

  useEffect(() => {
    fetchTvDetails()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>
      <Link to="/" className="back-button">
        <img src="./back-button.png" alt="back button" />
        <p>Home</p>
      </Link>
      <div className="tv-detail">
        <img src={`https://image.tmdb.org/t/p/w300${details.poster_path}`} alt="profile" />

        <div className="detail">
          <h1>{details.title}</h1>
        </div>
        <p>{details.overview}</p>
      </div>
    </div>
  )
};