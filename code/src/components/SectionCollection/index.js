import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { IMAGE_BACKDROP } from 'utils/apiConfig';

import RouteBackdropLink from 'components/Styled/RouteBackdropLink';

import CollectionWrapper from './style';

const SectionCollection = ({ id, name, ...other }) => {
  const props = { id, ...other };
  props.title = name;

  return (
    <CollectionWrapper>
      <div className="side-icon">
        <FontAwesomeIcon icon={faLayerGroup} />
      </div>
      <RouteBackdropLink
        backdrop={`${IMAGE_BACKDROP(other.backdrop_path)}`}
        to={`/collections/${id}`}>
        <h1>Part of the {name}</h1>
        <FontAwesomeIcon className="icon--show-on-hover" icon={faArrowRight} />
      </RouteBackdropLink>
    </CollectionWrapper>
  );
};

export default SectionCollection;
