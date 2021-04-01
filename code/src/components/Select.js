import React, { useState } from 'react'

const SelectMovie = ({onFilterChange}) => {
    //const [select, setSelect] = useState("popular")

    return(
        <section>
            <label>
            <p id="size">Type: {movieSelected} </p> 

          <select 
            onChange={onFilterChange} 
            value={sizeSelected}
            name="movie"
          >
            <option disabled value="">Select Size:</option>
            <option value="upcoming">Upcoming</option>
            <option value="popular">Popular</option>
            <option value="latest">Latest</option>
          </select>
      </label>
        </section>




    )
}

export default SelectMovie