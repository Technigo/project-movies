import React, { useState } from 'react'
import './dropdown.css'

export const DropDown = (props) => {
  const [category, setCategory] = useState('popular');

  props.chosenMovieList(category)

  return (
    <div className='category-dropdown'>
      <label>
        <h3>Select: </h3>
        <select className='select'
          onChange={event => setCategory(event.target.value)}
          value={category}
        >
          <option value='popular'>Most popular movies</option>
          <option value='top_rated'>Top rated movies</option>
          <option value='upcoming'>Upcoming movies</option>
          <option value='now_playing'>Now playing movies</option>
        </select>
      </label>
    </div>
  )
}