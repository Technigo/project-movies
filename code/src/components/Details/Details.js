import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export const Details = ({ imageInformation }) => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  const PosterPath = (poster_path) => {
    return (
      imageInformation.base_url + imageInformation.poster_sizes[3] + poster_path
    );
  };

  const BackdropPath = (backdrop_path) => {
    return (
      imageInformation.base_url +
      imageInformation.poster_sizes[6] +
      backdrop_path
    );
  };

  const routeChange = () => {
    history.push("/");
  };
  const onButtonBackClick = () => {
    history.goBack();
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=691b1dc74bbdcd3de3d91c33c77fd858`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.id) {
          setMovieDetail(json);
        } else {
          setIsError(true);
        }
        setTimeout(() => setLoading(false), 500);
      });
  }, [movieId]);

  if (loading) {
    return (
      <SpinnerContainer>
        <ClipLoader color={"white"} loading={true} size={150} />
      </SpinnerContainer>
    );
  }

  if (!loading && isError) {
    return (
      <Error>
        <span>Could not find the movie you were looking for!</span>
        <ErrorButton onClick={routeChange}>
          Return to the movie list
        </ErrorButton>
      </Error>
    );
  }

  if (!loading && !isError) {
    return (
      <>
        <Background background={BackdropPath(movieDetail.backdrop_path)}>
          {/* <img src={BackdropPath(movieDetail.backdrop_path)} /> */}
          <GoBackButton onClick={onButtonBackClick}>Back</GoBackButton>

          <TextContainer>
            <h1>{movieDetail.title}</h1>
            <ImgDiv>
              <img
                src={PosterPath(movieDetail.poster_path)}
                alt={`Poster for ${movieDetail.title}`}
              />
            </ImgDiv>
            <h2>Overview:</h2>
            <p>{movieDetail.overview}</p>
            <p>
              <strong>Release date:</strong> {movieDetail.release_date}
            </p>
            <p>
              <strong>Runtime:</strong> {movieDetail.runtime}min
            </p>
            <p>
              <strong>Budget:</strong> {movieDetail.budget}
            </p>
          </TextContainer>
        </Background>
      </>
    );
  }
};

// -------------------css---------------------------
const Background = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.background});
  min-height: 100vh;
  display: flex;
  background-size: cover;
  flex-direction: column;
  justify-content: flex-end;
`;

const TextContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  color: white;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid white;

  h1 {
    text-align: center;
  }
`;
const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;

const Error = styled.div`
  height: 100vh;  
  color: white;
  display flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px
`;

const ErrorButton = styled.button`
  padding: 8px 10px;
  border: none;
  border-radius: 2px;
  background-color: #cc1e1f;
  cursor: pointer;
  color: white;
  font-weight: 100;
  align-items: center;
`;

const GoBackButton = styled.button`
  background-color: grey;
  color: black;
  width: 130px;
  padding: 16px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  transition-duration: 0.4s;
  box-shadow: none;
  margin: 10px;

  :hover {
    background-color: white;
    color: var(--secondary);
    transition-duration: 0.4s;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
