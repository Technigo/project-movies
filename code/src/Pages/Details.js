import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const MainWrap = styled.div`
  position: fixed;
  margin: 0;
`;

const BackgroundImage = styled.img`
  position: fixed;
  z-index: -1;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
`;

const MovieSection = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  padding-left: 45px;
  padding-bottom: 45px;
  display: flex;
  align-items: bottom;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 15px;
  padding-left: 20px;
`;

const SmallPoster = styled.img`
  width: 22vw;
  border: 4px solid white;
`;

const TitleSection = styled.div`
  display: flex;
`;

const Title = styled.h1`
  font-size: 30px;
  color: white;
  margin-bottom: 20px;
`;

const Score = styled.h3`
  color: red;
  margin-left: 20px;
  background-color: white;
  align-self: center;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 30px;
`;

const Description = styled.p`
  width: 30vw;
  color: white;
  font-weight: 600;
  vertical-align: middle;
`;

export const Details = () => {
  const { detailsId } = useParams();
  const [oneMovie, setOneMovie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${detailsId}?api_key=3d84d8a2e7d9f4fcf68bb05afb8dd7ef&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        setOneMovie(json);
      });
  }, [detailsId]);

  return (
    <MainWrap>
      <BackgroundImage
        src={`https://image.tmdb.org/t/p/original/${oneMovie.backdrop_path}`}
        alt={oneMovie.backdrop_path}
      />
      <Button />
      <MovieSection>
        <SmallPoster
          src={`https://image.tmdb.org/t/p/original/${oneMovie.poster_path}`}
          alt={oneMovie.poster_path}
        />
        <MovieInfo>
          <TitleSection>
            <Title> {oneMovie.title}</Title>
            <Score> {oneMovie.vote_average} / 10</Score>
          </TitleSection>
          <Description> {oneMovie.overview}</Description>
        </MovieInfo>
      </MovieSection>
    </MainWrap>
  );
};



// TO DO's:
// Anything else?
// I think we need to add useHistory so if the user types anything other than a number/id the
// user will be redirected automatically to the homempage. 
