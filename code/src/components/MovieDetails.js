import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DETAILS_URL } from "utils/urls";
import { BackButton } from "../components/BackButton";
import styled from "styled-components";

const BackDropImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const BackButtonStyled = styled.button`
  position: absolute;
  top: 50px;
  left: 50px;
`;

const PosterImg = styled.img`
  position: absolute;
  width: 25%;
  border: 5px solid white;
  top: 30%;
  right:70%;
  bottom: 0;
  left:0: 
`;

const MovieTitleDetails = styled.span`
position: absolute;
top: 50%;
right:50%;
bottom: 0;
left:0: 
`;

const DetailsTitle = styled.h3`
  color: white;
`;

const MovieRating = styled.span`
position: absolute;
top: 50%;
right:40%;
bottom: 0;
left:0: 
`;

const Rating = styled.p`
  color: red;
`;

const TotalRate = styled.p`
  color: white;
`;

const OverviewText = styled.p`
position: absolute;
top: 60%;
right:0;
bottom: 0;
left:0: 
`;

const DetailsOverview = styled.p`
  color: white;
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [movieId]);

  return (
    <div>
      <BackButtonStyled>
        <BackButton />
      </BackButtonStyled>
      <BackDropImg
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
            : ""
        }
        alt={movie.title}
      />
      <PosterImg
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
            : ""
        }
        alt={movie.title}
      />
      <div>
        <MovieTitleDetails>
          <DetailsTitle>{movie.title}</DetailsTitle>
        </MovieTitleDetails>
        <MovieRating>
          <Rating>{movie.vote_average}</Rating>
          <TotalRate>/10</TotalRate>
        </MovieRating>
      </div>
      <OverviewText>
        <DetailsOverview>{movie.overview}</DetailsOverview>
      </OverviewText>
    </div>
  );
};

export default MovieDetails;
