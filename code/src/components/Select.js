import React, { useState } from 'react'

const SelectMovie = ({onFilterChange, popularity, TopRated, upcomingMovies, filter}) => {
    //const [select, setSelect] = useState("popular")
    
    return(
        
        <section>
            <label>
            <p id="size">Type:  </p> 

          <select 
            onChange={e => onFilterChange(e)} 
            value={filter}
            name="movie"
          >
            <option value={popularity}>Popular</option>
            <option value={upcomingMovies}>Upcoming</option>
            <option value={TopRated}>Top Rated</option>
          </select>
      </label>
        </section>




    )
}

export default SelectMovie