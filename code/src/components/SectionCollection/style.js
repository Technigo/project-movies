import styled from 'styled-components';

const CollectionWrapper = styled.section`
  margin: 1em;
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-gap: 20px;
  height: 200px;

  & > .side-icon {
    background: var(--dark1);
    color: white;
    font-size: 100px;
    text-align: center;
  }
  & > .side-icon > svg {
    height: 100%;
  }
  @media only screen and (max-width: 768px) {
    & > .side-icon {
      font-size: 50px;
    }
  }
`;

export default CollectionWrapper;
