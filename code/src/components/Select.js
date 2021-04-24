import React from 'react'

const SelectMovie = ({onFilterChange, popularity, topRated, upcomingMovies, filter}) => {
    return(  
        <section className="sort-by">
          <h3>Sort by:  </h3> 
          <select 
            onChange={e => onFilterChange(e)} 
            value={filter}
            name="movie"
          >
            <option value={popularity}>Popular</option>
            <option value={upcomingMovies}>Upcoming</option>
            <option value={topRated}>Top Rated</option>
          </select>
        </section>
    )
}

export default SelectMovie