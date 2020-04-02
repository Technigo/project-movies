import React, { useState } from 'react'

export const Dropdown = (props) => {
  const [category, setCategory] = useState('popular');

  props.chosenMovieList(category)

  return (
    <div className='category-dropdown'>
      <label>
        <select className='select'
          onChange={event => setCategory(event.target.value)}
          value={category}
        >
          <option value='popular'>Popular in the US</option>
          <option value='top_rated'>Top rated</option>
          <option value='upcoming'>Upcoming</option>
          <option value='now_playing'>Now playing movies</option>
        </select>
      </label>
    </div>
  )
}