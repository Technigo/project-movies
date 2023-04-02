/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { imageURL } from 'utils/urls';

export const Home = ({ array }) => {
  console.log(array)
  const e = Math.floor(Math.random() * array.length);
  const f = Math.floor(Math.random() * array.length);
  const g = Math.floor(Math.random() * array.length);
  const h = Math.floor(Math.random() * array.length);

  return (
    <div>
      <div className="image-wrapper home">
        <img className="genre-background" src={array[e]?.backdrop_path ? `${imageURL}/w1280/${array[e].backdrop_path}` : ''} alt={array[e]?.title || ''} />
        <img className="genre-background" src={array[f]?.backdrop_path ? `${imageURL}/w1280/${array[f].backdrop_path}` : ''} alt={array[f]?.title || ''} />
        <img className="genre-background" src={array[g]?.backdrop_path ? `${imageURL}/w1280/${array[g].backdrop_path}` : ''} alt={array[g]?.title || ''} />
        <img className="genre-background" src={array[h]?.backdrop_path ? `${imageURL}/w1280/${array[h].backdrop_path}` : ''} alt={array[h]?.title || ''} />
      </div>
      <Link className="home-button" to="/popular">Start here</Link>
    </div>
  )
}
