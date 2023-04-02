/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../data/Url';

 const Credits = () => {
    const [ credits, setCredits ] = useState([])
    const { movieId } = useParams()
  
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
        .then((res) => res.json())
        .then((data) => setCredits(data.cast.slice(0, 5)))
    }, [movieId])

    return (
      <div className="credits">
            {credits.map((credit) => (
          <p key={credit.name}>{credit.name}</p>
            ))}
          </div>
  )
}

export default Credits;