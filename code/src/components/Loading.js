import React from 'react';

import 'components/loading.css';

export const Loading = () => {
  return (
    <section className="loading">
      <img src="https://cdn.dribbble.com/users/848623/screenshots/3796170/corn1.gif" alt="popcorn animation" />
      <p>Loading...</p>
      <p>Get that corn popping!</p>
    </section>
  )
};