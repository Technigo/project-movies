import React from 'react'
import GenreList from 'components/GenreList'

const Header = ({ genreList, setLoading, setSelectedGenre, selectedGenre }) => {
  return (
    <nav className="navbar">
      <GenreList
        genreList={genreList}
        setLoading={setLoading}
        setSelectedGenre={setSelectedGenre}
        selectedGenre={selectedGenre} />
    </nav>
  )
}

export default Header;