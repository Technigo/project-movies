import styled from "styled-components";

const MovieDetailsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease-in-out;
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-end;
  padding: calc(var(--spacing) * 4);
`;

const MovieItemContainer = styled.li`
  position: relative;
  transition: all 0.5s ease-in-out;
  &:hover ${MovieDetailsContainer} {
    opacity: 1;
    background: rgba(0, 0, 0, 0.7);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Title = styled.h1`
  color: #fff;
  padding-bottom: calc(var(--spacing) * 4);
`;

const ReleaseDate = styled.p`
  color: #fff;
`;

export { MovieItemContainer, Image, MovieDetailsContainer, Title, ReleaseDate };
