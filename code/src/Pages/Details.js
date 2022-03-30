import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const MainWrap = styled.div`
  position: fixed;
`;

const BackgroundImage = styled.img`
  position: fixed;
  z-index: -1;
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
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  color: white;
  margin-bottom: 20px;
`;

const Score = styled.h4`
  color: red;
  padding: 20px;
  background-color: white;
`;

const Description = styled.p`
  width: 30vw;
  color: white;
  margin: 0;
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
      <button>Go Back</button>
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

// the movie emoji in span is just me being tired and silly :)

// TO DO's in detail component:
// Show the full-screen image (the backdrop)
// Show the smaller poster to the left, add a little border to it
// Show the movie title
// Show the vote-rating, like: 7.5/10
// Show the movie description
// Create the back-button that should only show from the details page.
// Anything else?
