import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DETAILS_URL } from "utils/urls";
import { BackButton } from "../components/BackButton";
import styled from "styled-components";

const MainWrapperStyled = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

const BgImgStyled = styled.img`
  height: 100vh;
  z-index: -1;
`
const OverlayStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.7;
  background: linear-gradient(0deg, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 70%);
  z-index: 1;
`;

const OverviewContainer = styled.div`
  width: 90%;
  position: absolute;
  left: 60px;
  bottom: 80px;
  display: flex;
  align-items: flex end;
  z-index: 2;
`;

const PosterImg = styled.img`
  width: 45%;
  max-width: 342px;
  border: 5px solid white;
`;

const MovieDetailsContainer = styled.div`
  width: 45%;
  max-width: 500px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding-left: 20px;
`;

const TitleRatingText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const MovieTitleDetails = styled.h3`
  width: fit-content;
  font-size: 28px;
  color: white;
  margin: 0;
  display: inline-block;
  align-items: flex-end;
`;

const MovieRating = styled.span`
  height: 25px;
  display: inline;
  color: white;
  font-weight: bold;
  margin: 15px;
  font-size: 16px;
  background-color: red;
  padding: 3px 5px 4px 5px;
  border-radius: 6px;
`;

const OverviewText = styled.p`
  color: white;
  font-size: 17px;
  line-height: 1.4;
  margin: 0;
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
    <MainWrapperStyled>
      <BackButton />
      <OverlayStyled />
        <BgImgStyled
          src={movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : ""}
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
            <MovieTitleDetails>
              {movie.title}<MovieRating>{movie.vote_average}/10</MovieRating>
            </MovieTitleDetails>
            
          </TitleRatingText>
          <OverviewText>{movie.overview}</OverviewText>
        </MovieDetailsContainer>
      </OverviewContainer>
    </MainWrapperStyled>
  );
};

export default MovieDetails;
