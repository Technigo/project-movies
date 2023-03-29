import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Details = () => { 
  const { movieName } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // setLoading(true);
    // console.log('movieDetails', movieDetails);
    fetch(`https://api.themoviedb.org/3/movie/${movieName}?api_key=d7ebb1544b11b5a98ffd2c23bb80dd3b&language=en-US`);
      .then((res) => res.json())
      .then((json) => {
        setMovieDetails(json);
        });
  }, [movieName]); 

  return (
    <div>
      <h1>🎬 This is detail componenet for {movieName} 🎬</h1>
      <button type="button" onClick={() => navigate('/404')}>
        Go to NotFound
      </button>
    </div>
  )
};
