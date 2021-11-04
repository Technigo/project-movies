import React from "react"
import { Link } from "react-router-dom"

import styled from "styled-components"

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
export const MovieCard = styled.div`
  width: 100%;
  position: relative;
`
export const MovieOverlay = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-end;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  color: white;

  &:hover {
    opacity: 1;
  }
`

const List = ({ movies }) => {
  return (
    <MovieContainer>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link
            style={{
              width: "25%",
              position: "relative",
              color: "#fff",
              textDecoration: "none",
            }}
            to={`/details/${movie.id}`}
          >
            <MovieCard>
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "100%" }}
              />

              <MovieOverlay>
                <h3 style={{ margin: "0 0 10px 10px" }}>
                  {" "}
                  {movie.original_title}{" "}
                </h3>
                <p style={{ margin: "0 0 20px 10px" }}>
                  {" "}
                  Released {movie.release_date}
                </p>
              </MovieOverlay>
            </MovieCard>
          </Link>
        </div>
      ))}
    </MovieContainer>
  )
}

export default List
