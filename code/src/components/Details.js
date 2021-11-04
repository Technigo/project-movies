import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import { API_KEY } from "utils/urls"
import { Button } from "./Button"
import styled from "styled-components"

export const BackgroundPoster = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
`
export const MovieDetails = styled.div`
  color: white;
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  align-items: flex-end;
  padding-left: 60px;
  float: left;
  position: fixed;
  bottom: 60px;
  padding: 50px;
`

export const MovieSummary = styled.div`
  text-shadow: 1px 1px black;
  margin: 0 20px;
`

const Details = () => {
  const [movie, setMovie] = useState([])
  const { movieId } = useParams()

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }, [movieId])

  return (
    <BackgroundPoster
      style={{
        backgroundImage: movie.backdrop_path
          ? `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
          : "",
      }}
    >
      <div>
        <Link className="back-link" to="/">
          &#8678; Movies
        </Link>
      </div>

      <MovieDetails>
        <img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
          style={{ border: "4px solid white" }}
        />
        <MovieSummary>
          <h2>{movie.original_title}</h2>
          <p style={{ color: "#ff0000", fontWeight: "bold" }}>
            Rating: {movie.vote_average}/10{" "}
          </p>
          {movie.tagline && <h2 className="tagline">"{movie.tagline}"</h2>}
          <p>{movie.overview}</p>
        </MovieSummary>
      </MovieDetails>
    </BackgroundPoster>
  )
}

export default Details
