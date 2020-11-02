import React from 'react';

import popcorn from '../assets/icons8-popcorn-96.png';

const Loader = () => {
  return (
    <section className="loader-page-container">
      <div className="loader-wrapper">
        <img className="popcorn" src={popcorn} alt="loader"></img>
        <img className="popcorn" src={popcorn} alt="loader"></img>
        <img className="popcorn" src={popcorn} alt="loader"></img>
      </div>

    </section>
  )
}

export default Loader;