import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { IMAGE_BACKDROP } from 'utils/apiConfig';

import RouteBackdropLink from 'components/Styled/RouteBackdropLink';

const Wrapper = styled.section`
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
  
`;

const SectionCollection = ({ id, name, ...other }) => {
  const props = { id, ...other };
  props.title = name;

  return (
    <Wrapper>
      <div className="side-icon">
        <FontAwesomeIcon icon={faLayerGroup} />
      </div>
      <RouteBackdropLink
        backdrop={`${IMAGE_BACKDROP(other.backdrop_path)}`}
        to={`/collections/${id}`}>
        <h1>Part of the {name}</h1>
        <FontAwesomeIcon className="icon--show-on-hover" icon={faArrowRight} />
      </RouteBackdropLink>
    </Wrapper>
  );
};

export default SectionCollection;
