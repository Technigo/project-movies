import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { FaChevronCircleLeft } from "react-icons/fa"
import { IconContext } from "react-icons"
import { API_KEY } from "utils/urls"

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
  margin-top: 60px;
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
      <Link
        to="/"
        style={{ textDecoration: "none", position: "absolute", zIndex: "1" }}
      >
        {/* --- Chevron Icon from the react-icons library --- */}
        <IconContext.Provider
          value={{
            color: "white",
            verticalAlign: "middle",
          }}
        >
          <div
            style={{
              position: "absolute",
              display: "inline-flex",
              color: "#fff",
              alignItems: "center",
              fontWeight: "bold",
              textDecoration: "none",
              left: "30px",
              top: "30px",
            }}
          >
            <FaChevronCircleLeft size={30} />
            <h2
              style={{
                marginLeft: "10px",
              }}
            >
              Movies
            </h2>
          </div>
        </IconContext.Provider>
      </Link>

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
          {movie.tagline && <h2>"{movie.tagline}"</h2>}
          <p>{movie.overview}</p>
        </MovieSummary>
      </MovieDetails>
    </BackgroundPoster>
  )
}

export default Details
