import React from 'react';

import { Wrapper, Spinner, Dot } from './style';

const LoaderSpinner = () => {
  return (
    <Wrapper>
      <Spinner>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </Spinner>
    </Wrapper>
  );
};

export default LoaderSpinner;
