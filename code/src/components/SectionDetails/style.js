import styled from 'styled-components';

export const DetailsWrapper = styled.section`
  padding: 2em 5em;
  display: grid;
  grid-template-columns: 185px 1fr;
  grid-gap: 20px;
  position: relative;
  background: var(--dark1);

  &::before {
    content: '';
    opacity: 0.3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.backdrop}) no-repeat;
    background-size: cover;
    background-position: center;
  }

  & > * {
    position: relative;
  }

  @media only screen and (max-width: 768px) {
    padding: 1em 2em;
  }
`;

export const DetailsText = styled.div`
  display: flex;
  flex-flow: column;
  color: white;

  & > h1 {
    padding: 0.5em 0;
  }
`;
