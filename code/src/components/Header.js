import React from 'react';

const Header = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date();
  const monthNumber = date.getMonth();
  const month = months[monthNumber]
  const year = date.getFullYear();
  return (
    <header>
      <h1>Popular movies</h1>
      <h2>{month} {year}</h2>
    </header>
  )
}

export default Header;