import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetail = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
 
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=02cab8b4b7310d0ffe039e2925a86d1b&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json)
      })
  }, [id])

  return (
    <div>
      Movie details 
    </div>
  );
};