import React, { useEffect, useState } from 'react';

const [movieThumbnails, setMovieThumbnails] = useState([]);
const [loading, setLoading] = useState(false);

const fetchMovieThumbnails = () => {
  setLoading(true)
  fetch('https://api.themoviedb.org/3/movie/804150?api_key=5e0fb7ffc6ed1b5ff2d5d2db9f68e259&language=en-US')
    .then((res) => res.json())
    .then((data) => setMovieThumbnails(data))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
}

useEffect(() => {
  fetchMovieThumbnails();
  // <--- This is a callback function. Its executed on every render of the page
}, []);