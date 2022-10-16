/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* import React from 'react';
// url for img: http://image.tmdb.org/t/p/w1280{{movie.poster_path}}

import { Link } from 'react-router-dom';

export const List = ({ movieList }) => {
  return (
    <div className="list">
      {movieList.map((movie) => {
        return (
          <Link
            key={movie.id} />)
      })}

    </div>

  );
} */

import React from 'react';
import { Link } from 'react-router-dom';
import SelectList from './SelectList'

export const MovieList = ({ list, selectList, setSelectList }) => {
  return (
  <>
  <section className="popular-section">
    {list.map((movie) => {
      return (
        <div className="popular-container">
          <Link key={movie.id} to={`/details/${movie.id}`}>
            <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
          </Link>
        </div>
          )
    })}
</section>
  </>
  );
}
