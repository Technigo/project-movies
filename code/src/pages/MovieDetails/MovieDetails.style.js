import styled from "styled-components";

const MoviePageContainer = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%),
    url("https://image.tmdb.org/t/p/w1280/${({ image }) => image}");
  min-height: 100vh;
  background-size: cover;
  padding: calc(var(--spacing) * 12);
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;

const DetailsContainer = styled.div`
  padding-left: calc(var(--spacing) * 6);
`;

const MovieImage = styled.img`
  border: 2px solid #fff;
  width: 350px;
  height: 520px;
`;

const MovieTitle = styled.h1`
  color: #fff;
  display: inline;
  padding-right: calc(var(--spacing) * 4);
`;

const MovieRate = styled.span`
  color: #f00000;
  font-weight: bold;
`;

const MovieOverview = styled.p`
  color: #fff;
  max-width: 400px;
  padding: calc(var(--spacing) * 4) 0;
`;

export {
  MoviePageContainer,
  DetailsContainer,
  MovieImage,
  MovieTitle,
  MovieRate,
  MovieOverview,
};
