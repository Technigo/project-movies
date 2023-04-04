import React from 'react'

const GenreList = ({ genreList, setSelectedGenre, selectedGenre }) => {
  const onOptionChangeHandler = (event) => {
    setSelectedGenre(event.target.value)
  }
  return (
    <select className="select-genre" value={selectedGenre} onChange={onOptionChangeHandler}>
      <option>Select a genre</option>
      {genreList.map((genre) => {
        return (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        )
      })}
    </select>
  )
}

export default GenreList;