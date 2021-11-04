import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DETAILS_URL } from "../utils/urls";
import { Background } from "components/Background";
import { ReturnButton } from "components/ReturnButton";
import NotFound from "components/NotFound";
import Spinner from "components/Spinner";
import styled from "styled-components";

const SummaryDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;

  @media (min-width:667px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;
const StyledImg = styled.img`
  border: 1px solid #fff;

  @media (min-width:667px) {
    border: 5px solid #fff;
  }
`;
const DetailDiv = styled.div`
  @media (min-width:667px) {
    margin-left: 20px;
  }
`;
const DescriptionP = styled.p`
  max-width: 400px;
`;
const RatingP = styled.span`
  font-size: 20px;
  color: red;
  font-weight: 700;
  margin-left: 10px;
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => {
        if (data.title) {
          setMovieDetails(data);
        } else {
          setError(true);
        }
      })
      .finally(() => setLoading(false))
  }, [movieId]);

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      {loading && <Spinner />}  
      <ReturnButton />
      <Background
        backgroundUrl={
          movieDetails.backdrop_path
            ? `https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`
            : ""
        }
      >
        <SummaryDiv>
          <StyledImg
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`
                : ""
            }
            alt={movieDetails.title}
          />
          <DetailDiv>
            <h1>
              {movieDetails.title}{" "}
              <RatingP>{movieDetails.vote_average}/10</RatingP>
            </h1>
            <DescriptionP>{movieDetails.overview}</DescriptionP>
          </DetailDiv>
        </SummaryDiv>
      </Background>
    </>
  );
};

export default MovieDetails;
