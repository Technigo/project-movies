import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MovieWrapper = styled.div`
  position: relative;
  width: 25%;
`;

export const MovieImage = styled.img`
  height: 500px;
  width: 100%;
  object-fit: cover;
`;

export const MovieOverlay = styled.div`
  word-wrap: break-word;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
    opacity: 1;
  }
`;

export const MovieTitle = styled.h1`
  margin: 0;
`;

export const Poster = styled.img`
  border: solid 5px white;
`;
export const MovieDetailsContainer = styled.div`
  padding: 50px;
  position: relative;
`;

export const MovieDetailsWrapper = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 1));
`;

export const MovieDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  margin-left: 15px;
`;

export const Rating = styled.span`
  color: red;
  font-size: 18px;
  vertical-align: middle;
`;
