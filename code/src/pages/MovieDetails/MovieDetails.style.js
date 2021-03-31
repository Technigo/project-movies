import styled from "styled-components";

const MoviePageContainer = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%),
    url("https://image.tmdb.org/t/p/w1280/${({ image }) => image}");
  min-height: 100vh;
  display: flex;
  background-size: cover;
  flex-direction: column;
  justify-content: flex-end;
`;

export { MoviePageContainer };
