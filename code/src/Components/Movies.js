import React, { useState, useEffect } from 'react';

export const Movies = () => {
  const [movieList, setMovieList] = useState([]) // empty array for input
  const [loading, setLoading] = useState(false);// loading check

  useEffect(() => {
    setLoading(true);
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=db7243cd4866f0f7a8a865282262f6fd&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => setMovieList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  })
}
