/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { imageURL } from 'utils/urls';

export const Home = ({ HomeArray }) => {
  const e = Math.floor(Math.random() * HomeArray.length);
  const f = Math.floor(Math.random() * HomeArray.length);
  const g = Math.floor(Math.random() * HomeArray.length);
  const h = Math.floor(Math.random() * HomeArray.length);

  return (
    <div>
      <div className="image-wrapper home">
        <img className="genre-background" src={HomeArray[e]?.backdrop_path ? `${imageURL}/w1280/${HomeArray[e].backdrop_path}` : ''} alt={HomeArray[e]?.title || ''} />
        <img className="genre-background" src={HomeArray[f]?.backdrop_path ? `${imageURL}/w1280/${HomeArray[f].backdrop_path}` : ''} alt={HomeArray[f]?.title || ''} />
        <img className="genre-background" src={HomeArray[g]?.backdrop_path ? `${imageURL}/w1280/${HomeArray[g].backdrop_path}` : ''} alt={HomeArray[g]?.title || ''} />
        <img className="genre-background" src={HomeArray[h]?.backdrop_path ? `${imageURL}/w1280/${HomeArray[h].backdrop_path}` : ''} alt={HomeArray[h]?.title || ''} />
      </div>
      <Link className="home-button" to="/popular">Start here</Link>
    </div>
  )
}
