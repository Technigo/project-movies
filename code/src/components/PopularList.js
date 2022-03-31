import React from "react"
import { Link } from 'react-router-dom';

import Flex from './styles/Flex.styled'
import OverlayCard from './styles/OverlayCard.styled'
import TextOverlay from './styles/TextOverlay.styled'
import Container from './styles/Container.styled'

const PopularList = ({ allMovies }) => {
  return (
    <Flex>
      {allMovies.map((movie) => (
        <Container>
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            rel="noopener noreferrer"
          >
            <img
              className="movie-img"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="movie poster"
            />
            <OverlayCard>
              <TextOverlay>
                <h2>{movie.original_title}</h2>
                <p>Release date:{movie.release_date}</p>
              </TextOverlay>
            </OverlayCard>
          </Link>
        </Container>
      ))}
    </Flex>
  )
}

export default PopularList
