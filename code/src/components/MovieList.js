/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* import React from 'react';
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
      <div className="select">
        <SelectList
          selectList={selectList}
          setSelectList={setSelectList} />
      </div>

      <div className="popular-list">
        {list.map((movie) => {
          return (
            <Link key={movie.id} to={`/details/${movie.id}`}>
              <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
            </Link>
          )
        })}
      </div>
    </>
  );
}

// url for img: http://image.tmdb.org/t/p/w1280{{movie.poster_path}}
// export default List;