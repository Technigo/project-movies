import React from 'react'

const Header = () => {
  return (
    <div className="header-container">
      <div className="dropdown">
        <button type="button">Menu</button>
        <div className="dropdown-content">
          <a href="#">Upcoming movies</a>
          <a href="#">Latest</a>
          <a href="#">Series</a>
        </div>
      </div>
    </div>
  )
}
export default Header;