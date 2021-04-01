import React from 'react';

import { IMAGE_BACKDROP } from 'utils/apiConfig';
import { getYear } from 'utils/helpers';

import Poster from 'components/Poster';
import Rating from 'components/Rating';
import { Pills, Pill } from 'components/Styled/Pills';

import { DetailsWrapper, DetailsText } from './style';

const SectionDetails = ({ id, title, overview, genres, name, ...other }) => {
  const posterProps = { id, title, ...other };
  return (
    <DetailsWrapper backdrop={`${IMAGE_BACKDROP(other.backdrop_path)}`}>
      <Poster {...posterProps} />
      <DetailsText>
        <h1>
          {title || name}
          {other.release_date && <span>({getYear(other.release_date)})</span>}
        </h1>
        {genres && (
          <Pills>
            {genres.slice(0, 3).map((genre) => (
              <Pill key={genre.id}>{genre.name}</Pill>
            ))}
          </Pills>
        )}
        {other.vote_average && <Rating rating={other.vote_average} />}
        <p>{overview}</p>
      </DetailsText>
    </DetailsWrapper>
  );
};

export default SectionDetails;
