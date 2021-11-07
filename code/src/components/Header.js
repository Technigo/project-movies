import React from "react"

const Header = ({ select, setSelect }) => {

  const onSelectChange = (event) => {
    setSelect(event.target.value)
  }

  return (
    <header className="moviePicker">
      <label htmlFor="movies">Choose a list:</label>
        <select name="movies" id="movies" value={select} onChange={onSelectChange}>
          <option value="popular">Popular</option>
          <option value="top">Top rated</option>
          <option value="upcoming">Upcoming</option>
          <option value="now">Now playing</option>
        </select>
    </header>
  )
}

export default Header