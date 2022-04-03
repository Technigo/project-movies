import React from "react"
import { Link } from 'react-router-dom';

//Styled components
import { AllMoviesFlexContainer } from './styles/Containers.styled'
import { OverlayCard, TextOverlay } from './styles/Overlay.styled'

const AllMovies = ({ allMovies }) => {
  return (
    <AllMoviesFlexContainer>
      {allMovies.map((movie) => (
        //Wrapping each movie card again with the same styled component (<AllMoviesFlexContainer>) for overlay effects
        <AllMoviesFlexContainer> 
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
                <p>Release date : {movie.release_date}</p>
              </TextOverlay>
            </OverlayCard>
          </Link>
        </AllMoviesFlexContainer>
      ))}
    </AllMoviesFlexContainer>
  )
}

export default AllMovies
