import React, { useState } from 'react'

const SelectMovie = ({onFilterChange, popularity, TopRated, upcomingMovies, filter}) => {
    //const [select, setSelect] = useState("popular")
    
    return(
        
        <section className="sort-by">
            <h3 id="size">Sort by:  </h3> 
            <select 
              onChange={e => onFilterChange(e)} 
              value={filter}
              name="movie"
            >
              <option value={popularity}>Popular</option>
              <option value={upcomingMovies}>Upcoming</option>
              <option value={TopRated}>Top Rated</option>
            </select>
        </section>




    )
}

export default SelectMovie