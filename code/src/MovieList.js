import React from 'react';
import { Link } from 'react-router-dom'

export const MovieList = ({ list }) => { // mapping through the api data
  return (
    <div>
      {list.map((movies) => {
        return (
          <>
            <Link key={movies.id} to={`/${movies.original_title}`}>{movies.original_title}</Link>
            <div>testing</div>
          </>
        )
      })}
    </div>

  )
}