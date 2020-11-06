import React from 'react';

import ButtonBack from './ButtonBack';

const Error = () => {
  return (
    <>
      <section>
        <p style={{ color: 'white' }}>
          Something went wrong, please try again later
        </p>
        <ButtonBack />
      </section>
    </>
  );
};
export default Error;
