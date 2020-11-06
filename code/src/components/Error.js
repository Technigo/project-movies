import React from 'react';

import Backbutton from './Backbutton';

const Error = () => {
  return (
    <>
      <section>
        <p style={{ color: 'white' }}>
          Something went wrong, please try again later
        </p>
        <Backbutton path={'/'} text="Give it another go!" />
      </section>
    </>
  );
};
export default Error;
