import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { DETAIL_URL } from "utils/URLS"

const Details = () => {
  const [details, setDetails] = useState([])
  const { movieId } = useParams()

  useEffect(() => {
    fetch(DETAIL_URL(movieId))
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
      })
  }, [movieId])
  console.log(details)

  return (
    <div>
      <Link to="/">
        <button className="home">Movies</button>
      </Link>

      <div
        className="background"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})`,
        }}
      >
        <div className="details">
          <img
            className="detailsimage"
            src={`https://image.tmdb.org/t/p/w342${details.poster_path}`}
            alt={details.title}
          />
          <div className="detail">
            <h1>
              {details.original_title}
              <span className="vote"> {details.vote_average}/10</span>
            </h1>
            <h1 className="overview">Description: {details.overview}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
