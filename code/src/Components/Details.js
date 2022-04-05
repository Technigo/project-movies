import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { DETAIL_URL } from "utils/URLS"
import styled from 'styled-components'


const DetailsButton = styled.a `
position: fixed;
margin: 10px 0 0 50px;
color: white;
font-size: 20px;
transition: transform 0.3s;

&:hover  {
  transform: scale(1.3);
}
`

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
       
        <DetailsButton> ❮ Movies</DetailsButton>
        
        
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
