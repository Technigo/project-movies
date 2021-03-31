import React from 'react';
import styled from 'styled-components';

import { IMAGE_URLS } from 'utils/apiConfig';

import Poster from 'components/Poster';

const DetailsWrapper = styled.section`
  padding: 2em 5em;
  display: grid;
  grid-template-columns: 185px 1fr 185px;
  grid-gap: 10px;
  position: relative;
  background: var(--dark2);

  &::before {
    content: '';
    opacity: 0.2;
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
`;

const DetailsText = styled.div`
  display: flex;
  flex-flow: column;
  color: white;
`;

const SectionDetails = ({ id, title, overview, ...other }) => {
  const props = { id, title, ...other };
  return (
    <DetailsWrapper backdrop={`${IMAGE_URLS.backdrop}${other.backdrop_path}`}>
      <Poster {...props} />
      <DetailsText>
        <h1>{title}<span>({other.release_date})</span></h1>
        {/* genre */}
        {/* rating */}
        <p>{overview}</p>
      </DetailsText>
    </DetailsWrapper>
  );
};

export default SectionDetails;
