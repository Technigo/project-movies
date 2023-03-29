import React from 'react'
import GenreList from 'components/GenreList'

const Header = ({ genreList, setSelectedGenre, selectedGenre }) => {
  return (
    <nav className="navbar">
      <GenreList
        genreList={genreList}
        setSelectedGenre={setSelectedGenre}
        selectedGenre={selectedGenre} />
    </nav>
  )
}

export default Header;