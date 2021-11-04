import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DETAILS_URL } from "utils/urls";
import { BackButton } from "../components/BackButton";
import styled from "styled-components";

const BackDropContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-size: cover;
  justify-content: flex-end;
  position: relative;
  z-index: -1;
`;

const OverviewContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: flex end;
  padding: 50px;
`;

const PosterImg = styled.img`
  width: 50%;
  border: 5px solid white;
`;

const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height; 300px; 
  
`;

const TitleRatingText = styled.div`
  display: flex;
`;

const MovieTitleDetails = styled.h3`
  font-size: 26px;
  color: white;
  margin-right: 15px;
`;

const MovieRating = styled.span`
  display: flex;
  margin: 0;
  color: white;
  align-items: center;
`;

const Rating = styled.p`
  color: red;
`;

const OverviewText = styled.p`
  color: white;
`;

const ErrorText = styled.h2`
  text-align: center;
  color: white;
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          setMovie(data);
        } else {
          setHasError(true);
        }
      })
      .catch(() => setHasError(true));
  }, [movieId]);

  if (hasError) {
    return <ErrorText>Sorry this page doesn't exist</ErrorText>;
  }

  return (
    <div>
      <BackButton />
      <BackDropContainer>
        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
              : ""
          }
          alt={movie.title}
        />
        <OverviewContainer>
          <PosterImg
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                : ""
            }
            alt={movie.title}
          />
          <MovieDetailsContainer>
            <TitleRatingText>
              <MovieTitleDetails>{movie.title}</MovieTitleDetails>
              <MovieRating>
                <Rating>{movie.vote_average}/10</Rating>
              </MovieRating>
            </TitleRatingText>

            <OverviewText>{movie.overview}</OverviewText>
          </MovieDetailsContainer>
        </OverviewContainer>
      </BackDropContainer>
    </div>
  );
};

export default MovieDetails;
