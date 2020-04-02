import React, { useState } from 'react'

export const Dropdown = (props) => {
  const [genre, setGenre] = useState('878')

  props.genreList(genre)

  return (
    <div className="genre-dropdown">
      <label>
        <select className="select"
          onChange={event => setGenre(event.target.value)}
          value={genre}
        >
          <option value='878'>Sci-Fi</option>
          <option value='14'>Fantasy</option>
          <option value='12'>Adventure</option>
          <option value='16'>Animation</option>
        </select>
      </label>
    </div>
  )
}