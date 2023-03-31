import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { NotFound } from './NotFound';
import '../css/Details.css';

// This component shows movie details
export const Details = () => {
  // movieDetails stores movie information
  const [movieDetails, setMovieDetails] = useState([])

  // id helps us know which movie to show
  const { id } = useParams()
  // params is an object that holds values extracted from the URL,
  // so we can use them in our code. In this case, it helps us get
  // the movie ID from the URL.

  // This function rounds the rating number
  const roundedNumber = Math.round(movieDetails.vote_average * 10) / 10
  // When we multiply movieDetails.vote_average by 10, we shift the decimal point
  // one position to the right. Then, when we use Math.round(), we round the number
  // we round the number to the nearest whole number. By doing this, we are
  // effectively rounding the original value to one decimal place

  // After rounding, we then divide the result by 10 to shift
  // the decimal point back to its original position.

  // FetchDetails gets movie details from an API
  const FetchDetails = () => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=d120fe8810b0e45a06baa667dd3dc7fc&language=en-US`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => {
        console.error(error)
        if (error) {
          return (<NotFound />)
        }
      })
  }

  // This runs FetchDetails when the component loads
  useEffect(() => {
    FetchDetails()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // This part shows movie details on the screen
  // Set the background image of the movie

  // First image below: The outer curlies {} are used to embed JavaScript expressions inside JSX
  // Whenever JavaScript expression in your JSX, you need to wrap it in curly braces.
  // The inner curly braces {} are used to create a JavaScript object.
  // In this case, the object represents the CSS style properties for the element.

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`
      }}>
      {/* Create a back button to go to the previous page */}
      <div className="movie-detail-wrapper">
        <div className="movie-detail">
          <div className="button-placement">
            <Link to="/" className="back-button">
              <img src="arrow-left-128.png" alt="Back button" />
              <h2>Back</h2>
            </Link>
          </div>
          {/* Display the movie poster and details */}
          {/* Show the movie poster */}
          <img src={`http://image.tmdb.org/t/p/w780${movieDetails.poster_path}`} alt="TV-Series" />
          {/* Show the movie title, rating, and overview */}
          <div className="details">
            <div className="title-vote">
              {/* Display the movie title */}
              <h1 className="details-title">{movieDetails.name}</h1>
              {/* Show the movie rating with an icon */}
              <h1 className="details-rating">Rating: {roundedNumber}</h1>
            </div>
            {/* Present the movie overview */}
            <p>{movieDetails.overview}</p>
          </div>
        </div>
      </div>
    </div>

  // Second image (above): To include the value of movieDetails.poster_path in the URL,
  // we use a template literalwe use a template literal which is a string enclosed in backticks (`).
  // Template literals allow embed JavaScript expressions into a string using ${expression} syntax
  )
}