import React, { useState, useEffect } from 'react';

const Details = ({ singleMovie }) => {
  const [movies setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${singleMovie.id}?api_key=4d07e418e3a6ee346618c7a898de9210&language=en-US&page=1`)
      .then((response) => response.json())
      .then((fetchData) => {
        setMovies(fetchData);
        console.log(fetchData);
      });
  }, [singleMovie.id]);
  return (
    <div className="details-container">
      {/* This is not working ATM */}
      {movies.results.map(singleMovie) => {
      <div>
        {singleMovie.id}
      </div>}
      }
    
    </div>
  )
};

export default Details;