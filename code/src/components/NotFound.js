import React from 'react';
import { Link } from 'react-router-dom';

import 'components/notfound.css';

export const NotFound = () => {
  return (
    <section className="not-found">
      <h1>Oops! Bummer, We couldn't find that movie... <span role="img" aria-label="shy emoji">&#128517;</span></h1>
      <img src="https://thumbs.gfycat.com/UnpleasantFancyFairyfly-size_restricted.gif" />
      <h2>Check the most popular movies and grab that pop corn!</h2>
      <Link to="/" exact="true">
        <p><span role="img" aria-label="movies emoji">&#127871;</span>Back to Popular Movies<span role="img" aria-label="movies emoji">&#127871;</span></p>
      </Link>
    </section>
  )
};