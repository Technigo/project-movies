import React from 'react';
import styled from 'styled-components';

import { IMAGE_POSTER } from 'utils/apiConfig';

const PosterImage = styled.img`
  width: fit-content;
  height: fit-content;
  align-self: center;
`;

const Poster = ({ id, title, ...other }) => {
  return (
    <>
      <PosterImage src={`${IMAGE_POSTER(185, other.poster_path)}`} alt={title} />
      {/* <iframe title={id} width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY" /> */}
    </>
  );
};

export default Poster;
