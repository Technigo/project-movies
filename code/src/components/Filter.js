import React from 'react'

const Filter = ({ onMovieFilter }) => {
  return (
    <div className="filter-btn-container">
      <button className="filter-btn" onClick={() => onMovieFilter('upcoming')}>Upcoming</button>
      <button className="filter-btn" onClick={() => onMovieFilter("top_rated")}>Top Rated</button>
      <button className="filter-btn" onClick={() => onMovieFilter("popular")}>Popular</button>
    </div>
  )
}

export default Filter