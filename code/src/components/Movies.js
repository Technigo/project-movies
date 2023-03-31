import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Movies.css';

// This component displays a single movie
const Movies = ({ title, releaseDate, movieId, poster }) => {
  // 'isHover' tracks if the mouse is over the movie, 'setIsHover' updates the state
  const [isHover, setIsHover] = useState(false)

  // This function is called when the mouse enters the movie area
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  // This function is called when the mouse leaves the movie area
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  // This part shows the movie poster and title on the screen
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Wrap the movie poster and title with the Link component */}
      <Link to={`/movies/${movieId}`}>
        {/* Display the movie poster */}
        <img src={`http://image.tmdb.org/t/p/w780${poster}`} alt="movie" />
        <div className={isHover ? 'description' : 'hidden-description'}>
          {/* Show the movie title and release date when hovered */}
          <div className={isHover ? 'description' : 'hidden-description'}>
            <h1>{title}</h1>
            <p>{releaseDate}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Movies;