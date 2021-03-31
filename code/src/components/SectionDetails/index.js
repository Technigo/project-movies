import React from 'react';

import { IMAGE_URLS } from 'utils/apiConfig';

import Poster from 'components/Poster';
import Rating from 'components/Rating';
import { Pills, Pill } from 'components/Styled/Pills';

import { DetailsWrapper, DetailsText } from './style'

const SectionDetails = ({ id, title, overview, genres, ...other }) => {
  const props = { id, title, ...other };

  return (
    <DetailsWrapper backdrop={`${IMAGE_URLS.backdrop}${other.backdrop_path}`}>
      <Poster {...props} />
      <DetailsText>
        <h1>
          {title}
          <span>({other.release_date})</span>
        </h1>
        <Pills>
          {genres.slice(0, 3).map((genre) => (
            <Pill key={genre.id}>{genre.name}</Pill>
          ))}
        </Pills>
        <Rating rating={other.vote_average} />
        <p>{overview}</p>
      </DetailsText>
    </DetailsWrapper>
  );
};

export default SectionDetails;
