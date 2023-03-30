import React, { useEffect, useState } from 'react';

const Header = ({ setList }) => {
  const [category, setCategory] = useState('');

  useEffect(() => {
    console.log(category);
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=c77f0f257b1db8c5cdfe593182e32f79&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setList(data.results))
      .catch((e) => { console.error(e) })
  }, [category, setList])

  return (
    <header>
      <h1>The Movies</h1>
      <div className="selectAndBtnWrapper">
        <label htmlFor="category">Change category 👇
          <select id="category" onChange={(event) => setCategory(event.target.value)} value={category}>
            <option value="popular">Popular</option>
            <option value="now_playing">Now Playing</option>
            <option value="upcoming">Upcoming</option>
            <option value="top_rated">Top Rated</option>
          </select>
        </label>
        <div className="contact-us">
          <button
            type="button"
            className="contact"
            onClick={() => window.open('https://fiona-klacar-portfolio.netlify.app/')}>
              Contact Fiona
          </button>
          <button
            type="button"
            className="contact"
            onClick={() => window.open('https://fannystenberg.netlify.app/')}>
              Contact Fanny
          </button>
        </div>
      </div>
    </header>
  )
};

export default Header;