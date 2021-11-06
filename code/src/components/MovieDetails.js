import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DETAILS_URL } from "utils/urls";
import { BackButton } from "../components/BackButton";
import styled from "styled-components";
import NotFound from "../components/NotFound"

const MainWrapperStyled = styled.div`
  height: 100%;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
`


const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.7;
  background: linear-gradient(0deg, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 70%);
  z-index: 1;
`;

const OverviewContainer = styled.div`
  margin-top: 160px; 
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex end;
  z-index: 2;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    position: absolute;
    left: 60px;
    bottom: 80px;
    margin-top: 0px; 
    margin-bottom: 0px;
  }
`;

const PosterImg = styled.img`
  width: 70%;
  max-width: 342px;
  border: 5px solid white;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    width: 45%;
    margin-bottom: 0px;
  }
`;

const MovieDetailsContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  
  @media (min-width: 768px) {
    width: 45%;
    padding-left: 20px;
  }
`;

const TitleRatingText = styled.div`
  max-width: 425px;
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

const BgImgStyled = styled.img`
position: fixed;
z-index: -1;
height: 100vh;

@media (min-width: 768px) {
  height: 100vh;
  z-index: -1;
}
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
    return <NotFound/>;
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
