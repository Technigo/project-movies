import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { MOVIE_TRAILER_URL } from './urls';

export const Trailer = () => {
  const [trailer, setTrailer] = useState({})
  const navigate = useNavigate();
  const { trailerId } = useParams();

  useEffect(() => {
    fetch(MOVIE_TRAILER_URL(trailerId))
      .then((res) => res.json())
      .then((data) => {
        setTrailer(data)
      })
      .catch((e) => {
        console.error(e);
        navigate('/404');
      })
  }, [trailerId, navigate])

  return (
    <div>
      <iframe
        title={trailer}
        width="500"
        height="300"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
    </div>
  )
}