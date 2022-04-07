import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { API_KEY } from "Apis/Urls";

const Moviedetail = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState([]);

  //Destructuring from useState hook holding API data object
  const { title, poster_path, backdrop_path, overview, vote_average } =
    movieDetails;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((movieInfo) => {
        setMovieDetails(movieInfo);
      });
  }, [movieId]);

  const Container = styled.div`
    position: relative;
    margin: 0;
    display: flex;
    flex-direction: column;
    color: white;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%),
      url(https://image.tmdb.org/t/p/w1280${backdrop_path});
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
  `;

  const BackLinkContainer = styled.div`
    position: relative;
    height: 80px;
    width: 100vw;
  `;

  const StyledBackLink = styled(Link)`
    position: absolute;
    width: 200px;
    margin: 30px;
    color: white;
    font-weight: 700;
    text-decoration: none;
    border-radius: 10px;
    text-align: center;
    padding: 10px;
    display: flex;

    &:hover {
      transition: 0.5s ease;
      filter: invert(70%);
    }

    @media (min-width: 768px) {
      font-size: 30px;
    }
  `;

  const InfoContainer = styled.div`
    position: absolute;
    margin-top: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    width: 80vw;

    @media (min-width: 768px) {
      flex-direction: row;
      margin-top: 50vh;
      align-items: flex-end;
      width: 90vw;
      
    }

    @media (min-width: 992px) {
        margin-top: 25vh;
    }

  `;

  const ImageContainer = styled.div`
    display: flex;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      width: 300px;
      margin: 0;
    }

  `;

  const MovieSmallImage = styled.img`
    border: 1px solid white;
    border-radius: 10px;
    width: 180px;

    @media (min-width: 768px) {
      width: 100%;
    }

    @media (min-width: 992px) {
      width: 300px;
    }

    @media (min-width: 1200px) {
        width: 350px;
       
    }
  `;

  const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 80vw;
    background-color: rgba(0, 0, 0, 0.637);
    border-radius: 10px;

    @media (min-width: 768px) {
      margin-left: 5vw;
      width: 55vw;
    }

    @media (min-width: 992px) {
      width: 60vw;
      margin-left: 5vw;
    }

    @media (min-width: 1200px) {
      width: 50vw;
      margin-left: 10vw;
    }
  `;
  const MovieTitle = styled.p`
    display: inline;
    font-size: 23px;
    margin: 10px;

    @media (min-width: 768px) {
      font-size: 28px;
    }

    @media (min-width: 992px) {
      font-size: 30px;
    }

    @media (min-width: 1200px) {
      font-size: 25px;
    }
  `;

  const MovieOverview = styled.p`
    display: block;
    font-size: 15px;
    margin: 10px;

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 992px) {
      font-size: 20px;
    }

    @media (min-width: 1200px) {
      font-size: 18px;
    }
  `;
  const MovieRating = styled.span`
    font-size: 18px;
    color: green;
    margin: 10px;

    @media (min-width: 768px) {
      font-size: 22px;
    }

    @media (min-width: 992px) {
      font-size: 20px;
    }

    @media (min-width: 1200px) {
      font-size: 20px;
    }
  `;

  return (
    <>
      <Container>
        <BackLinkContainer>
          <StyledBackLink to="/">
            <img
              width={20}
              style={{ filter: "invert(100%)" }}
              src="../icons/left-arrow.png"
              alt="arrow"
            />
            Movies
          </StyledBackLink>
        </BackLinkContainer>
        <InfoContainer>
          <ImageContainer>
            <MovieSmallImage
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt="film poster"
            />
          </ImageContainer>

          <TextContainer>
            <MovieTitle>
              {title} <MovieRating>{vote_average}/10</MovieRating>
            </MovieTitle>
            <MovieOverview>{overview}</MovieOverview>
          </TextContainer>
        </InfoContainer>
      </Container>
    </>
  );
};

export default Moviedetail;
