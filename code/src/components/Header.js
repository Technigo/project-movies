import React from 'react'
import GenreList from 'components/GenreList'

const Header = ({ genreList, setSelectedGenre, selectedGenre }) => {
  return (
    <nav className="navbar">
      <img className="logo" src="images/logo.png" alt="Movie Page Logo" />
      <GenreList
        genreList={genreList}
        setSelectedGenre={setSelectedGenre}
        selectedGenre={selectedGenre} />
    </nav>
  )
}

export default Header;