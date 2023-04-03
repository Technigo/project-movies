import React from 'react'
import GenreList from 'components/GenreList'

const Header = ({ genreList, setSelectedGenre, selectedGenre }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-container"><img className="logo" src="images/logo.png" alt="Movie Page Logo" /><h1>MOVIES</h1></div>
      <GenreList
        genreList={genreList}
        setSelectedGenre={setSelectedGenre}
        selectedGenre={selectedGenre} />
    </nav>
  )
}

export default Header;