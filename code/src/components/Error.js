import React from 'react';

import ButtonBack from './ButtonBack';

const Error = () => {
  return (
    <section className="error">
      <p>Something went wrong, please try again later</p>
      <ButtonBack className="button" text="Try again" />
    </section>
  );
};

export default Error;
